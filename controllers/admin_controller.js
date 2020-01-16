'use strict';
/**
 * 管理后台请求
 * @author CTJ
 * @date 2019/8/28
 */

const httpService = require('../services/http_service');
const tlSqlService = require('../models/tl_sql_service');
const cosService = require('../services/cos_service');
const {getParams} = require('../common/utility');
const {IMAGE_TYPE, DIR_PATH} = require('../common/constant');
const path = require('path');
const fs = require('fs');
const jwt = require('jwt-simple');
const passwordUtility = require('../common/password_utility');


const TOKEN_EXPIRED = 60 * 60 * 24 * 1000; // token过期时间
const TOKEN_SECRET = 'tjwd';

class GMController {
  constructor(ctx) {
  }

  // 用户登录
  async login(ctx) {
    const { username, password } = getParams(ctx);

    let sql = `select * from admin where username='${username}'`;
    let users = await tlSqlService.query(sql);
    let user = users[0];

    if (user && user.password === password) {
      // 荷载
      const payload = {
        _id: user._id,
        flag: passwordUtility.cookPw(user.password), // 实现修改密码后 其他的token无效 达到安全性
        exp: (TOKEN_EXPIRED) + Date.now(),
      };

      const token = jwt.encode(payload, TOKEN_SECRET);

      return ctx.body = [null, {token}];
    }

    return ctx.body = ['用户名或密码错误'];
  }


  // 获取用户信息
  async getUsrtInfo() {
    const { username } = getParams(ctx);

    let sql = `select * from admin where username='${username}'`;
    let users = await tlSqlService.query(sql);
    let user = users[0];

    return ctx.body = {user};
  }


  // 后台获取列表
  async getContentList() {
    let {type, len = 50, createTime = new Date()} = getParams(ctx);

    if (type) {
      type = Number(type);
    }
    len = Number(len);
    let sql1 = `select * from content where createTime<=now()`;
    let sql2 = `select * from image where createTime<=now() order by createTime desc limit ${len}`;
    console.log('sql ===============', sql1, sql2);
    switch (type) {
      case constant.CONTENT_TYPE.CHAT: {
        let list = await tlSqlService.query(sql1);
        return ctx.body = {tlList: list};
      }
      case constant.CONTENT_TYPE.IMAGE: {

        let list = await tlSqlService.query(sql2);

        return ctx.body = {imageList: list};
      }
      default: {
        let [tlList, imageList] = await Promise.all([tlSqlService.query(sql1), tlSqlService.query(sql2)]);
        return ctx.body = {tlList, imageList};
      }
    }
  }

  // 上传表情
  async uploadImage() {
    const {files, group, desc} = getParams(ctx);
    let fileNames = [];

    for (const file of files) {
      let result;
      try {
        // 往mongo写入数据
        let fileNameArr = file.filename.split('.');

        let sqlResult = await tlSqlService.insert('image', {
          kind: IMAGE_TYPE.EMOJI,              // 分类
          topic: group,                        // 分组
          des:  desc,                          // 描述
          type: fileNameArr[fileNameArr.length-1],       // 类型
          praiseNum: 0,          // 点赞数
          transpondNum: 0,       // 转发数
          browseNum: 0,          // 浏览数
          createTime: new Date(),
        });

        let cosFileName = sqlResult.insertId + '.' +fileNameArr[fileNameArr.length-1];
        console.log('cosFileName =====',cosFileName);
        fileNames.push(fileName);
        // process file or upload to cloud storage
        let curPath = path.join(__ROOT, 'src/image',fileName);  // 当前文件路径
        let result = await cosService.sliceUploadFile(curPath, cosFileName, DIR_PATH.EMOJI);

        fs.unlinkSync(curPath);  // 删除文件
      } catch (e) {
        console.error(e);
      }finally {
        // need to remove the tmp files
        await ctx.cleanupRequestFiles();
      }
    }

    return ctx.body = {res: {fileNames}};
  }

  /**
   * 本地脚本批量上传表情
   * @param ctx
   * @return {Promise<{res: {fileNames: string[]}}>}
   */
  async uploadImageByScript(ctx) {
    const param = getParams(ctx);
    console.log('param ======', param);

    let fileNames = fs.readdirSync(path.join(__ROOT, 'src/image'));  // 已存在的文件
    let imageDescConfig = require(path.join(__ROOT, 'src/config/imgInfo.json'));

    for (let {desc, fileName} of imageDescConfig) {
      if (!desc || !fileName || !fileNames.includes(fileName)) {
        continue;
      }

      let errId, errFile;
      try {
        // 往mysql写入数据
        let fileNameArr = fileName.split('.');
        let sqlResult = await tlSqlService.insert('image', {
          kind: IMAGE_TYPE.EMOJI,              // 分类
          topic: desc,                         // 分组
          des:  desc,                          // 描述
          type: fileNameArr[fileNameArr.length-1],       // 类型
          praiseNum: 0,          // 点赞数
          transpondNum: 0,       // 转发数
          browseNum: 0,          // 浏览数
          createTime: new Date(),
        });

        // console.log('sqlResult =====',sqlResult);

        let cosFileName = sqlResult.insertId + '.' +fileNameArr[fileNameArr.length-1];
        console.log('cosFileName =====',cosFileName);
        errId =  sqlResult.insertId;
        errFile = cosFileName;
        fileNames.push(fileName);
        // process file or upload to cloud storage
        let curPath = path.join(__ROOT, 'src/image',fileName);  // 当前文件路径
        let result = await cosService.sliceUploadFile(curPath, cosFileName, DIR_PATH.EMOJI);

        fs.unlinkSync(curPath);  // 删除文件
      } catch (e) {
        console.error(e);
        // await service.gm.deleteImage(errId, errFile);
      }
    }

    return ctx.body = {res: {fileNames}};
  }

  // 上传tl
  async uploadContent() {
    const {files, group, desc} = getParams(ctx);
    // 校验参数
    const req = ctx.request.body || {};   //title, type, content

    for (let key in  req) {
      try {
        req[key] = JSON.parse(req[key]);
      } catch (e) {

      }
    }

    // let files = ctx.request.files;

    let res = await service.gm.uploadContent(req, files);

    ctx.helper.success({ctx, res})
  }

  // 修改tl
  async updateContent() {
    const { ctx, service, logger } = this;
    // 组装参数
    const req = ctx.request.body || {};
    // 调用 Service 进行业务处理
    let res = await service.gm.updateContent(req);
    // 设置响应内容和响应状态码
    ctx.helper.success({ctx, res});
  }

  // 修改表情
  async updateImage() {
    const { ctx, service } = this;
    // 校验参数
    // ctx.validate(this.UserUpdateTransfer)
    // 组装参数
    const req = ctx.request.body || {};
    // 调用 Service 进行业务处理
    let res = await service.gm.updateImage(req);
    // 设置响应内容和响应状态码
    ctx.helper.success({ctx, res})
  }

  // 删除表情
  async deleteImage() {
    const { ctx, service } = this;
    // 校验参数

    // 组装参数
    const {id, type} = ctx.request.body || {};
    console.log('id, type ===', id, type);
    let fileName = id + '.'+type;
    // 调用 Service 进行业务处理
    let res = await service.gm.deleteImage(id, fileName);
    // 设置响应内容和响应状态码
    ctx.helper.success({ctx, res})
  }

  // 删除tl
  async deleteContent() {
    const { ctx, service } = this;
    // 校验参数

    // 组装参数
    const {id} = ctx.request.body || {};
    console.log('id ===', id);
    // let fileName = id + '.'+type;
    // 调用 Service 进行业务处理
    let res = await service.gm.deleteContent(id);
    // 设置响应内容和响应状态码
    ctx.helper.success({ctx, res})
  }

  // 获取单个用户
  async show() {
    const { ctx, service } = this
    // 组装参数
    const { id } = ctx.params
    // 调用 Service 进行业务处理
    const res = await service.user.show(id)
    // 设置响应内容和响应状态码
    ctx.helper.success({ctx, res})
  }

  // 获取所有用户(分页/模糊)
  async index() {
    const { ctx, service } = this
    // 组装参数
    const payload = ctx.query
    // 调用 Service 进行业务处理
    const res = await service.user.index(payload)
    // 设置响应内容和响应状态码
    ctx.helper.success({ctx, res})
  }

  // 删除所选用户(条件id[])
  async removes() {
    const { ctx, service } = this
    // 组装参数
    // const payload = ctx.queries.id
    const { id } = ctx.request.body
    const payload = id.split(',') || []
    // 调用 Service 进行业务处理
    const result = await service.user.removes(payload)
    // 设置响应内容和响应状态码
    ctx.helper.success({ctx})
  }
}

module.exports = new GMController;
