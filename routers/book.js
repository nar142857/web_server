const router = require('koa-router')();
const userInfoController = require('./../controllers/user-info');
const bookController = require('./../controllers/book_controller');


router.all('/get_book_list', bookController.getBookList);
router.all('/api/*', bookController.getBookApiByShenQi);
router.all('/content/*', bookController.getBookContentByShenQi);



module.exports = router;
