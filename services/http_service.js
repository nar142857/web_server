'use strict';
/**
 * 处理http请求
 * @author CTJ
 * @date 2019/8/16
 */
var rp = require('request-promise');


/**
 * get请求
 * @param url  地址 'https://api.github.com/user/repos',
 * @param qs  参数 {a: a, b: b}
 * @param headers  // {'User-Agent': 'Request-Promise'},
 * @param json Automatically parses the JSON string in the response
 * @return {Promise<*[]>}
 */
async function get({url, qs = {}, headers = {}, json = true}) {
  console.debug('get url ====', url);
  var options = {
    url,
    qs,
    headers,
    json,
    encoding: null,
  };

  try {
    const result = await rp(options);
    return [null, result];
  } catch (e) {
    console.error('http get error: ', e, options);
    return [e]
  }
}

/**
 * post 请求
 * @param method
 * @param url
 * @param body
 * @param json
 * @return {Promise<*[]>}
 */
async function post ({method = 'POST', url, body = {}, json = true}) {
  console.debug('post url ====', url);
  const options = {
    method,
    url,
    body,
    json,
  };

  try {
    const result = await rp(options);
    return [null, result];
  } catch (e) {
    console.error('http get error: ', e, options);
    return [e]
  }
}


async function getWXOpenId(code, appId, secret) {

  let url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${secret}&js_code=${code}&grant_type=authorization_code`;
  let [error, result] = await get({url: url});

  if (error) {
    console.error('getWXOpenId err:    ', error);
    return [error];
  }

  if (result.errcode) {
    return [result]
  }

  return [null, result];
}

module.exports = {
  get,
  post,
  getWXOpenId,
};

