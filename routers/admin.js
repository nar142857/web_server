'use strict';
/**
 * gm相关路由
 * @author CTJ
 * @date 2019/8/29
 */
const router = require('koa-router')();
const adminController = require('../controllers/admin_controller');


/* 通过脚本上传图片 */
router.all('/uploadImageByScript', adminController.uploadImageByScript);


router.all('/login', adminController.login);
router.all('/getUserInfo', adminController.getUsrtInfo);


module.exports = router;
