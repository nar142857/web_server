'use strict';
/**
 *
 * @author CTJ
 * @date 2019/9/2
 */

const router = require('koa-router')();
const userController = require('./../controllers/user_controller');
router.all( '/login', userController.login);
router.all( '/get_collection', userController.getCollection);
router.all( '/set_collection', userController.setCollection);

module.exports = router;
