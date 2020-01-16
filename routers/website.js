const router = require('koa-router')();
const userInfoController = require('./../controllers/user-info');
const websiteController = require('./../controllers/website_controller');


router.all('/get_web_list', websiteController.getWebList);
router.all('/add_web', websiteController.addWeb);
router.all('/update_web', websiteController.updateWeb);



module.exports = router;
