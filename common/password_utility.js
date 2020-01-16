'use strict'

const crypto = require('crypto');

// 切勿轻易改动 !!!!!!!!!
const SALT_LENGTH = 6;
const HASHED_LENGTH = 14;

/**
 * sha256哈希
 * @param {string} what
 * @return {string} 16进制数字符串
 */
function sha256(what) {
  return crypto.createHash('sha256').update(what).digest('hex');
}

/**
 * 将密码与盐一起哈希
 * @param {string} salt
 * @param {string} pw
 * @return {string}
 */
function _createHash(salt, pw) {
  return sha256(salt + pw).substr(0, HASHED_LENGTH);
}

/**
 * 烹饪密码
 * @param {string} pw
 * @return {string}
 */
function cookPw(pw) {
  let salt = sha256('' + Math.random()).substr(0, SALT_LENGTH);
  let hashed = _createHash(salt, pw);

  return salt + hashed;
}

/**
 * 验证密码
 * @param {*} pw
 * @param {*} cooked
 * @return {boolean}
 */
function verifyPw(pw, cooked) {
  let salt = cooked.substr(0, SALT_LENGTH);
  let hashed = cooked.substr(SALT_LENGTH, HASHED_LENGTH);

  return _createHash(salt, pw) === hashed;
}

module.exports = {
  sha256,
  cookPw,
  verifyPw,
};

/**
 * 测试
 */
async function main() {
  console.log(cookPw('123456'));
}

// 单元测试
if (module === require.main) {
  main();
}
