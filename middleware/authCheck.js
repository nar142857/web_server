'use strict';

module.exports = options => {

  return async function(ctx, next) {

    const req = ctx.request || {};

    let token = req.headers['x-token'];
    if (!token) {
      token = req.query.token || req.body.token;
    }

    if (!token) {
      console.error('no token');
      return ctx.helper.fail({ctx, msg: 'token 验证失败'});
    }

    token = token.trim();
    let [authValidateEroor, user] = await ctx.helper.validateToken({ctx, token});
    if (authValidateEroor) {
      console.error('authValidateEroor =====',authValidateEroor);
      return ctx.helper.fail({ctx, msg: 'token 验证失败'});
    }

    // 将获取的用户信息放到 req 对象中 以便下方可随时获取到
    req.user = user;
    req.user_id = user._id;
    req.permissions = user.role.permission_codes;

    req.test = 'tst ========================';
    console.log('req 333======', typeof req, req.user);
    function _get_params(request) {
      if (request.method == 'GET')
        return request.query
      else if (request.method == 'POST')
        return request.body
      else
        return {}
    }

    let path = req.path;
    let params = _get_params(req);
    // if (path != '/auth/getUserInfo' && path != '/gm/queryGMOptByTime' && path != '/gm/queryGMOptByName') {
    //   gmLogic.add(user.username, user.role.name, req.path, params);
    // }

    await next();
  }
};
