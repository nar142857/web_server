'use strict';
/**
 *
 * @author CTJ
 * @date 2019/8/16
 */

const WXBizDataCrypt = require("./wx_biz_data_crypt");
const path = require('path');
const fs = require('fs');
const download = require('download');

/**
 * 获取请求参数
 * @param ctx
 */
function getParams (ctx) {
  let input = {};
  if (ctx.method == 'GET') input = ctx.request.query;
  if (ctx.method == 'POST') input = ctx.request.body;

  return input;
}

/**
 * 解密微信用户数据
 * @param app_id
 * @param session_key
 * @param iv
 * @param encryptedData
 * @return {*}
 */
function decrypt(app_id, session_key, iv, encryptedData) {

  let pc = new WXBizDataCrypt(app_id, session_key);

  let data = pc.decryptData(encryptedData , iv);

  return data
}


async function downloadImg(urls = [], existFiles = []){
  let prArr = [];
  const imageUrl = path.join(__ROOT , '/src/image/');
  if (existFiles.length === 0) {
    existFiles = fs.readdirSync(imageUrl);  // 已存在的文件
  }

  for (let {url, fileName} of urls) {

    if (existFiles.includes(fileName)) {
      console.log(`${fileName} ----已存在!`);
      continue;
    }

    let pr = download(url).then(data => {
      fs.writeFileSync(imageUrl+ '/'+fileName, data);
      console.log(fileName + ' ----下载成功!');
      existFiles.push(fileName);
    }).catch((err)=>{
      console.error(err);
    });

    let prace = Promise.race([pr, new Promise(function (resolve, reject) {
      setTimeout(() => {
        console.warn('下载超时: ', fileName);
        resolve('下载超时: ', fileName);
      }, 5000)
    })]);

    await prace;
  }

  return existFiles;
}

module.exports = {
  getParams,
  decrypt,
  downloadImg,
};
