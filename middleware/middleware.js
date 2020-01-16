// 'use strict'
//
// const {responser} = require('../common/express_tool');
// const MSG_ERROR_CODES = require('../common/msg_error_codes');
// const authLogic = require('../admin_logic/auth_logic');
// const gmLogic = require('../admin_logic/gm_logic');
//
// /**
//  * 用户token验证
//  * @param {*} req
//  * @param {*} res
//  * @param {*} next
//  */
// async function auth (req, res, next) {
//   let token = req.headers['x-token'];
//   if (!token) {
//     token = req.query.token || req.body.token;
//   }
//
//   if (!token) {
//     return responser.fail(res, MSG_ERROR_CODES.AUTH_INVALID_TOKEN, 401);
//   }
//
//   token = token.trim();
//   let [authValidateEroor, user] = await authLogic.validateToken(token );
//   if (authValidateEroor) {
//     return responser.fail(res, authValidateEroor, 401);
//   }
//
//   // 将获取的用户信息放到 req 对象中 以便下方可随时获取到
//   req.user = user;
//   req.user_id = user._id;
//   req.permissions = user.role.permission_codes;
//
//   function _get_params(request) {
//     if (request.method == 'GET')
//       return request.query
//     else if (request.method == 'POST')
//       return request.body
//     else
//       return {}
//   }
//   let path = req.path;
//   let params = _get_params(req);
//   if (path != '/auth/getUserInfo' && path != '/gm/queryGMOptByTime' && path != '/gm/queryGMOptByName') {
//     gmLogic.add(user.username, user.role.name, req.path, params);
//   }
//
//   return next();
// }
// /**
//  * 检查当前用户的权限
//  * // [permission, ...]
//  * @param {[]} requiredPermissions
//  */
// function isPermitted (requiredPermissions = []) {
//
//   const {checkPermision} = require('../common/permission_util');
//
//   function onDenied(req, res) {
//     return responser.fail(res, MSG_ERROR_CODES.AUTH_NOTPERMISSION, 403);
//   }
//
//   function withPermissions (req) {
//     if (req.permissions) return req.permissions
//     return [];
//   }
//
//   return function(req, res, next) {
//     const currUserPermission = withPermissions(req);
//
//     if (checkPermision(currUserPermission, requiredPermissions)) {
//       return next()
//     }
//
//     return onDenied (req, res, next);
//   }
// }
//
// module.exports = {
//   auth,
//   isPermitted
// };
