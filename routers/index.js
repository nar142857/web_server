/**
 * 整合所有子路由
 */

const router = require('koa-router')();

const home = require('./home');
const api = require('./api');
const admin = require('./admin');
const user = require('./user');
const book = require('./book');
const website = require('./website');
const work = require('./work');
const error = require('./error');

router.use('/', home.routes(), home.allowedMethods());
router.use('/api', api.routes(), api.allowedMethods());
router.use('/admin', admin.routes(), admin.allowedMethods());
router.use('/user', user.routes(), user.allowedMethods());
router.use('/book', book.routes(), book.allowedMethods());
router.use('/website', website.routes(), website.allowedMethods());

router.use('/work', work.routes(), work.allowedMethods());
router.use('*', error.routes(), error.allowedMethods());

module.exports = router;


