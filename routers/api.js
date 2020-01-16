/**
 * restful api 子路由
 */

const router = require('koa-router')();
const userInfoController = require('./../controllers/user-info');
const apiController = require('./../controllers/api_controller');

// const routers = router
//   .get('/user/getUserInfo.json', userInfoController.getLoginUserInfo)
//   .post('/user/signIn.json', userInfoController.signIn)
//   .post('/user/signUp.json', userInfoController.signUp)

/* openApi相关 */
router.all('/open_api/get_image', apiController.getImage);
router.all('/open_api/get_joke', apiController.getJoke);

/**
 * 阿凡达数据
 */
router.all('/avatar/get_joke', apiController.getJokeFromAvatar);


/**
 * 微信相关
 */
router.all('/wx/get_openid', apiController.getOpenId);


/**
 * 今日头条相关
 */
router.all('/toutiao/news_list', apiController.getNewsList);
router.all('/toutiao/get_detail', apiController.getDetail);

/**
 * 网易新闻
 */
router.all('/wangyi/get_video', apiController.getVideo);


router.all('/kugou/');


/**
 * hippopx相关
 */
router.all('/hippopx/get_hippopx_image', apiController.getHippopxImage);



/**
 * tl app
 * @type {*}
 */
router.all('/get_list', apiController.getList);
router.all('/search', apiController.search);


router.all('/get_cos_src_url', apiController.getCosSrcUrl);


router.all('/test', apiController.test);



module.exports = router;
