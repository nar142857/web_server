/**
 * 错误处理中间件
 */

async function onerror(ctx, next) {
  try {
    await next();
  } catch (err) {
    ctx.app.emit('error', err);
    ctx.body = 'server error';
    ctx.status = err.status || 500;
  }
}