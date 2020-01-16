/**
 * 错误页面子路由
 */

const router = require('koa-router')()

module.exports = router.get('*',  async ( ctx ) => {
  console.error('error router: ', ctx.request.url);
  const title = 'error';
  return ctx.body = {error: 'router is not found'}
});
