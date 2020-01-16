'use strict';
/**
 *
 * @author CTJ
 * @date 2019/9/2
 */

const httpService = require('../services/http_service');
const tlSqlService = require('../models/tl_sql_service');
const {getParams} = require('../common/utility');
const {apiUrl, wx, config} = require('../config/common');
const constant = require('../common/constant');
const utility = require("../common/utility");

class UserController {
  constructor() {

  }

  /**
   * 登录
   * @param ctx platform 平台 默认wx, code, encryptedData当是wx的时候传,username, password 其他平台传
   * @return {Promise<{userInfo: {unionId: *, province: *, city: string, openId, sex: *, nickname: void | string | never, avatar: *}}>}
   */
  async login(ctx) {
    const {platform = 'wx', appId = wx.appId, code, encryptedData, iv, userInfo, username, password} = getParams(ctx);  // platform, appId, code, username, password

    if (platform === 'wx') {
      let [validate_error, validated] = await httpService.getWXOpenId(code, wx.appId, wx.appSecret);
      if (validate_error) {
        console.error('wx.validate_js_code err:   ', validate_error);
        return;
      }
      const loginId = validated.openid;
      const session_key = validated.session_key;

      let decrypted = utility.decrypt(appId, session_key, iv, encryptedData);
      const unionid = decrypted.unionid || decrypted.unionId;

      const sql = `select * from user where openid= ?`;
      let users = await tlSqlService.query(sql, [loginId]);
      // 新玩家,则注册
      if (!users || !users[0]) {
        const sql = `insert into user (openid, unionid, username, avatar) values (?,?,?,?)`;
        await tlSqlService.query(sql, [loginId, unionid, decrypted.nickName, decrypted.avatarUrl]);
        users = await tlSqlService.query(sql, [loginId]);
      }

      console.log('users ======', users);
      const userInfo = {
        uid: users[0].id,
        username: decrypted.nickName,
        avatar: decrypted.avatarUrl,
        sex: decrypted.gender,
        city: decrypted.city,
        province: decrypted.province,
        unionid,
        openid: validated.openid,
        token: validated.openid,            // 暂时传openid
      };

      return ctx.body = {
        userInfo,
      };
    }
  }

  /**
   * 获取收藏
   * @param ctx
   * @return {Promise<void>}
   */
  async getCollection(ctx) {
    const {uid} = getParams(ctx);
    const sql = `select * from collection where uid = ? order by id desc`;
    const result = await tlSqlService.query(sql, [uid]);

    ctx.body = {
      result,
    }
  }


  /**
   * 增加收藏
   * @param ctx
   * @return {Promise<void>}
   */
  async setCollection(ctx) {
    const {uid, url, type='image', name} = getParams(ctx);
    // 插入数据, 重复则不插入
    let sql = `INSERT INTO collection(uid, url, type, name) SELECT ?,?,?,? FROM DUAL WHERE NOT EXISTS(SELECT * FROM collection WHERE url = ?)`;

    const [err, result] = await tlSqlService.querySafe(sql, [uid, url, type, name, url]);

    if (err) {
      return ctx.body = {
        result: constant.ERROR_CODE.COLLECT_ERROR,
      }
    }

    if (result.affectedRows === 0) {
      return ctx.body = {
        result: constant.ERROR_CODE.COLLECT_REPEAT,
      }
    }

    ctx.body = {
      result,
    }
  }



  /**
   *
   Query参数名	类型	必需	描述	示例 e.g.
   type	string	否	指定查询类型，可选参数(all/video/image/gif/text)	all
   page	string	否	页码(传0或者不传会随机推荐)	1
   count	string	否	每页返回数量	10
   * @return {Promise<*>}
   */
  async getJoke(ctx) {
    const param = getParams(ctx);
    console.log('param ======', param);
    const [err, result] = await httpService.post({
      url: apiUrl.openApi + '/getJoke',
      body: {
        type:'gif',
        page: param.page || 0,
        count: param.count || 20,
      },
    });

    if (err) {
      console.error('getJoke error: ', err);
    }

    return ctx.body = result.result;
  }


  /**
   * 获取微信openid
   * @param ctx
   * @return {Promise<*>}
   */
  async getOpenId(ctx) {
    const param = getParams(ctx);  // code
    const [err, validated] = await httpService.getWXOpenId(param.code, wx.appId, wx.appSecret);
    if (err) {
      console.error('getOpenId err:   ', err);
      return ctx.body = {
        errcode: err.errcode,
        data: err,
        msg: 'getOpenId err'
      };
    }
    const openid = validated.openid;

    return ctx.body = {
      openid,
    };
  }

  /**
   * 获取新闻列表
   * @param ctx
   * @return {Promise<*>}
   */
  async getNewsList(ctx) {
    const param = getParams(ctx);  // type
    let type = parseInt(param.type);
    let path;
    // 0 热点新闻 1 社会新闻 2 娱乐新闻 3体育新闻 4美文 散文 5科技 6 财经 7 时尚
    switch (type) {
      case 0:
        path =
          // '/list/?tag=news_hot&ac=wap&count=20&format=json_raw&as=A1A59982B911729&cp=5929E12752796E1&min_behot_time=0';
          '/list/?tag=news_hot';
        break;
      case 1:
        path =
          '/list/?tag=news_society&ac=wap&count=20&format=json_raw&as=A195B9F229018CD&cp=592991783C9D8E1&min_behot_time=0';
        break;
      case 2:
        path =
          '/list/?tag=news_entertainment&ac=wap&count=20&format=json_raw&as=A1C51992996195E&cp=5929D119B58EFE1&min_behot_time=0';
        break;
      case 3:
        path =
          '/list/?tag=news_sports&ac=wap&count=20&format=json_raw&as=A1054902B911A1E&cp=592991AA81AEAE1&min_behot_time=0';
        break;
      case 4:
        path =
          '/list/?tag=news_essay&ac=wap&count=20&format=json_raw&as=A195495279C19DE&cp=5929C1F91DFEEE1&min_behot_time=0';
        break;
      case 5:
        path =
          '/list/?tag=news_tech&ac=wap&count=20&format=json_raw&as=A1854972BABC6FF&cp=592A9CC64FCFAE1&max_behot_time=0';
        break;
      case 6:
        path =
          '/list/?tag=news_finance&ac=wap&count=20&format=json_raw&as=A145E9025A6C78B&cp=592ACC87687B1E1&max_behot_time=0';
        break;

      case 7:
        path =
          '/list/?tag=news_fashion&ac=wap&count=20&format=json_raw&as=A1353902AA9C7F9&cp=592ADCD7CF89AE1&max_behot_time=0';
        break;
      default:
        path =
          '/list/?tag=news_hot&ac=wap&count=20&format=json_raw&as=A1A59982B911729&cp=5929E12752796E1&min_behot_time=0';
    }

    const url = apiUrl.toutiao + path;
    console.log('url ====', url);
    const [err, result] = await httpService.get({url});
    if (err) {
      console.error('getNewsList err: ', err);
      ctx.status = 404;
      return ctx;
    }

    return ctx.body = result.data;
  }

  /**
   * 获取新闻详情
   * @param ctx
   * @return {Promise<*>}
   */
  async getDetail(ctx) {
    const param = getParams(ctx);  // itemId
    const itemId = param.itemId || '6536479907868836356';
    const path = `/i${itemId}/info/`;
    const url = apiUrl.toutiao + path;
    console.debug('url ====', url);
    const [err, result] = await httpService.get({url});
    return ctx.body = result.data;
  }

  /**
   *
   * @param ctx
   * @return {Promise<*>}
   */
  async getVideo(ctx) {
    const param = getParams(ctx);  // type page
    let id;
    let type = parseInt(param.type) || 0;
    let page = parseInt(param.page) || 1;
    // 0搞笑视频  1美女视频  2体育视频  3 新闻现场 4涨姿势  5猎奇  6 黑科技 默认搞笑视频
    switch (type) {
      case 0:
        id = 'VAP4BFE3U';
        break;
      case 1:
        id = 'VAP4BG6DL';
        break;
      case 2:
        id = 'VBF8F2E94';
        break;
      case 3:
        id = 'VAV3H6JSN';
        break;
      case 4:
        id = 'VBF8F3SGL';
        break;
      case 5:
        id = 'VBF8ET3S2';
        break;
      case 6:
        id = 'VBF8F2PKF';
        break;
      default:
        id = 'VAP4BFE3U';
    }
    const path = `/nc/video/list/${id}/y/${page}-20.html`;
    const url = apiUrl.wangyi+path;
    const [err, result] = await httpService.get({url});

    return ctx.body = result[id];
  }



  async getJokeFromAvatar(ctx) {
    const param = getParams(ctx);
    console.log('param ======', param);

    // http://api.avatardata.cn/Joke/QueryJokeByTime?key=794bbf726c0b4c1a96fc87ef4dfcf291&page=2&rows=10&sort=asc&time=1418745237
    const url = `${apiUrl.avatar}/Joke/QueryJokeByTime`;
    const now = Math.floor(Date.now()/1000) - 12*30*24*60*60;
    console.log('now ====', now);
    const [err, result] = await httpService.get({
      url,
      qs: {
        key: config.avatarKey,
        page: param.page || 0,
        rows: param.count || 20,
        sort: 'asc',
        time: now,
      },
    });

    if (err) {
      console.error('getJokeFromAvatar error: ', err);
    }
    if (result.error_code) {
      console.error('getJokeFromAvatar error: ', result);
    }

    return ctx.body = result.result;
  }

}


module.exports = new UserController();
