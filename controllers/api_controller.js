'use strict';
/**
 *
 * @author CTJ
 * @date 2019/8/16
 */
const httpService = require('../services/http_service');
const tlSqlService = require('../models/tl_sql_service');
const {getParams, downloadImg} = require('../common/utility');
const {apiUrl, wx, config, cosUrlConfig} = require('../config/common');
const cheerio = require('cheerio');
const constant = require('../common/constant');
const path = require('path');
const fs = require('fs');

class ApiController {
    constructor() {

    }

    /**
     * 获取图片
     * @param ctx
     * @return {Promise<*>}
     * page 页码(传0或者不传会随机推荐)
     * count 每页返回数量
     */
    async getImage(ctx) {
        const param = getParams(ctx);  // page, count, type
        // 从openapi获取
        const [err, data] = await httpService.post({
            url: apiUrl.openApi + '/getImages',
            body: param,
        });

        if (err) {
            console.error('getImage error: ', err);
        }
        return ctx.body = {
            result: data.result,
        };

        // let result = await tlSqlService.getList(constant.TABLE_NAME.IMAGE);
        // let data = [];
        // for (let {id, type} of result) {
        //   data.push({
        //     id,
        //     img: `https://tl-1256189109.cos.ap-shanghai.myqcloud.com/images/emoji/${id}.${type}`
        //   });
        // }
        //
        //
        // return ctx.body = {
        //   result: data
        // };
    }

    /**
     *
     Query参数名    类型    必需    描述    示例 e.g.
     type    string    否    指定查询类型，可选参数(all/video/image/gif/text)    all
     page    string    否    页码(传0或者不传会随机推荐)    1
     count    string    否    每页返回数量    10
     * @return {Promise<*>}
     */
    async getJoke(ctx) {
        const param = getParams(ctx);
        console.log('param ======', param);
        const [err, result] = await httpService.post({
            url: apiUrl.openApi + '/getJoke',
            body: {
                type: 'gif',
                page: param.page || 0,
                count: param.count || 20,
            },
        });

        if (err) {
            console.error('getJoke error: ', err);
        }

        return ctx.body = result.result;
    }


    /**
     * 获取微信openid
     * @param ctx
     * @return {Promise<*>}
     */
    async getOpenId(ctx) {
        const param = getParams(ctx);  // code
        const [err, validated] = await httpService.getWXOpenId(param.code, wx.appId, wx.appSecret);
        if (err) {
            console.error('getOpenId err:   ', err);
            return ctx.body = {
                errcode: err.errcode,
                data: err,
                msg: 'getOpenId err'
            };
        }
        const openid = validated.openid;

        return ctx.body = {
            openid,
        };
    }

    /**
     * 获取新闻列表
     * @param ctx
     * @return {Promise<*>}
     */
    async getNewsList(ctx) {
        const param = getParams(ctx);  // type
        let type = parseInt(param.type);
        let path;
        // 0 热点新闻 1 社会新闻 2 娱乐新闻 3体育新闻 4美文 散文 5科技 6 财经 7 时尚
        switch (type) {
            case 0:
                path =
                    // '/list/?tag=news_hot&ac=wap&count=20&format=json_raw&as=A1A59982B911729&cp=5929E12752796E1&min_behot_time=0';
                    '/list/?tag=news_hot';
                break;
            case 1:
                path =
                    '/list/?tag=news_society&ac=wap&count=20&format=json_raw&as=A195B9F229018CD&cp=592991783C9D8E1&min_behot_time=0';
                break;
            case 2:
                path =
                    '/list/?tag=news_entertainment&ac=wap&count=20&format=json_raw&as=A1C51992996195E&cp=5929D119B58EFE1&min_behot_time=0';
                break;
            case 3:
                path =
                    '/list/?tag=news_sports&ac=wap&count=20&format=json_raw&as=A1054902B911A1E&cp=592991AA81AEAE1&min_behot_time=0';
                break;
            case 4:
                path =
                    '/list/?tag=news_essay&ac=wap&count=20&format=json_raw&as=A195495279C19DE&cp=5929C1F91DFEEE1&min_behot_time=0';
                break;
            case 5:
                path =
                    '/list/?tag=news_tech&ac=wap&count=20&format=json_raw&as=A1854972BABC6FF&cp=592A9CC64FCFAE1&max_behot_time=0';
                break;
            case 6:
                path =
                    '/list/?tag=news_finance&ac=wap&count=20&format=json_raw&as=A145E9025A6C78B&cp=592ACC87687B1E1&max_behot_time=0';
                break;

            case 7:
                path =
                    '/list/?tag=news_fashion&ac=wap&count=20&format=json_raw&as=A1353902AA9C7F9&cp=592ADCD7CF89AE1&max_behot_time=0';
                break;
            default:
                path =
                    '/list/?tag=news_hot&ac=wap&count=20&format=json_raw&as=A1A59982B911729&cp=5929E12752796E1&min_behot_time=0';
        }

        const url = apiUrl.toutiao + path;
        console.log('url ====', url);
        const [err, result] = await httpService.get({url});
        if (err) {
            console.error('getNewsList err: ', err);
            ctx.status = 404;
            return ctx;
        }

        return ctx.body = result.data;
    }

    /**
     * 获取新闻详情
     * @param ctx
     * @return {Promise<*>}
     */
    async getDetail(ctx) {
        const param = getParams(ctx);  // itemId
        const itemId = param.itemId || '6536479907868836356';
        const path = `/i${itemId}/info/`;
        const url = apiUrl.toutiao + path;
        console.debug('url ====', url);
        const [err, result] = await httpService.get({url});
        return ctx.body = result.data;
    }

    /**
     *
     * @param ctx
     * @return {Promise<*>}
     */
    async getVideo(ctx) {
        const param = getParams(ctx);  // type page
        let id;
        let type = parseInt(param.type) || 0;
        let page = parseInt(param.page) || 1;
        // 0搞笑视频  1美女视频  2体育视频  3 新闻现场 4涨姿势  5猎奇  6 黑科技 默认搞笑视频
        switch (type) {
            case 0:
                id = 'VAP4BFE3U';
                break;
            case 1:
                id = 'VAP4BG6DL';
                break;
            case 2:
                id = 'VBF8F2E94';
                break;
            case 3:
                id = 'VAV3H6JSN';
                break;
            case 4:
                id = 'VBF8F3SGL';
                break;
            case 5:
                id = 'VBF8ET3S2';
                break;
            case 6:
                id = 'VBF8F2PKF';
                break;
            default:
                id = 'VAP4BFE3U';
        }
        const path = `/nc/video/list/${id}/y/${page}-20.html`;
        const url = apiUrl.wangyi + path;
        const [err, result] = await httpService.get({url});

        return ctx.body = result[id];
    }


    async getJokeFromAvatar(ctx) {
        const param = getParams(ctx);
        console.log('param ======', param);

        let src = 'apiopen__';
        if (src === 'apiopen') {
            const [err, result] = await httpService.get({
                url: apiUrl.openApi + '/getJoke',
                qs: {
                    type: 'text',
                    page: 0,
                    count: param.count || 20,
                    json: false,
                },
            });

            console.debug('result =====', result);

            if (err) {
                console.error('getJoke error: ', err);
            }

            let arr = [];
            for (let {sid, text, type} of result.result) {
                arr.push({
                    hashId: sid,
                    content: text,
                });
            }

            return ctx.body = arr;
        }


        // http://api.avatardata.cn/Joke/QueryJokeByTime?key=794bbf726c0b4c1a96fc87ef4dfcf291&page=2&rows=10&sort=asc&time=1418745237
        const url = `${apiUrl.avatar}/Joke/QueryJokeByTime`;
        const now = Math.floor(Date.now() / 1000) - 12 * 30 * 24 * 60 * 60;
        console.log('now ====', now);
        const [err, result] = await httpService.get({
            url,
            qs: {
                key: config.avatarKey,
                page: param.page || 0,
                rows: param.count || 20,
                sort: 'asc',
                time: now,
            },
        });

        if (err) {
            console.error('getJokeFromAvatar error: ', err);
        }
        if (result.error_code) {
            console.error('getJokeFromAvatar error: ', result);
        }

        return ctx.body = result.result;
    }


    /**
     * 获取内容列表
     * @param ctx type: 1对话 2表情, len:获取内容长度, createTime:创建时间筛选,
     * @return {Promise<*>}
     */
    async getList(ctx) {
        let {type, len = 50, createTime = new Date()} = getParams(ctx);

        if (type) {
            type = Number(type);
        }
        len = Number(len);
        let sql1 = `select * from content where createTime<=now()`;
        let sql2 = `select * from image where createTime<=now() order by createTime desc limit ${len}`;
        console.log('sql ===============', sql1, sql2);
        switch (type) {
            case constant.CONTENT_TYPE.CHAT: {
                let list = await tlSqlService.query(sql1);
                return ctx.body = {tlList: list};
            }
            case constant.CONTENT_TYPE.IMAGE: {

                let list = await tlSqlService.query(sql2);

                return ctx.body = {imageList: list};
            }
            default: {
                let [tlList, imageList] = await Promise.all([tlSqlService.query(sql1), tlSqlService.query(sql2)]);
                return ctx.body = {tlList, imageList};
            }
        }
    }


    /**
     * 根据关键字搜索
     * @param ctx key关键字 len长度 type类型 1,2
     * @return {Promise<*>}
     */
    async search(ctx) {
        let {key, type, len = 20} = getParams(ctx);

        if (type) {
            type = Number(type);
        }

        let sql1 = `select * from content where des like '%${key}%' limit ${len}`;
        let sql2 = `select * from image where des like '%${key}%' limit ${len}`;

        switch (type) {
            case constant.CONTENT_TYPE.CHAT: {
                let list = await tlSqlService.query(sql1);
                return ctx.body = {tlList: list};
            }
            case constant.CONTENT_TYPE.IMAGE: {
                let list = await tlSqlService.query(sql2);
                return ctx.body = {imageList: list};
            }
            default: {
                let [tlList, imageList] = await Promise.all([tlSqlService.query(sql1), tlSqlService.query(sql2)]);
                return ctx.body = {tlList, imageList};
            }
        }
    }

    async getHippopxImage(ctx) {
        const {page = 1,} = getParams(ctx);  // page
        const type = 'openapi';

        if (type === 'openapi') {
            // 从openapi获取
            const [err, data] = await httpService.post({
                url: apiUrl.openApi + '/getImages',
                body: {page},
            });

            if (err) {
                console.error('getImage error: ', err);
            }
            return ctx.body = {
                result: data.result,
            };
        }

        // 从hippopx获取
        const [err, html] = await httpService.get({
            url: apiUrl.hippopx + '/popular',  // 获取热门图片
            qs: {page},
        });

        if (err) {
            console.error('getImage error: ', err);
        }

        const $ = cheerio.load(html);
        let imgArr = [];

        let data = $("ul li img").each((index, ele) => {
            let url = $(ele).attr('src');
            let temp = url.split('/');
            let obj = {
                desc: $(ele).attr('alt'),
                id: temp[temp.length - 1],
                img: url,
                fileName: $(ele).attr('title'),
            };
            console.log('obj =====', obj);
            imgArr.push(obj);
        });

        // console.log('data =====', data);
        return ctx.body = {
            result: imgArr,
        };

    }

    /**
     * 将网络上的资源保存到cos中,返回相应的cos地址
     * @param ctx
     * @return {Promise<void>}
     */
    async getCosSrcUrl(ctx) {
        let {url} = getParams(ctx);
        const sql = `select * from cos_url where url=? limit 1`;
        let [err, results] = await tlSqlService.querySafe(sql, [url]);

        if (!results || !results[0]) {
            const cosService = require('../services/cos_service');
            const sql = `insert into cos_url(url, type) values(?,?)`;
            let temp = url.split('.');
            const type = temp[temp.length - 1];
            [err, results] = await tlSqlService.querySafe(sql, [url, type]);
            const fileName = results.insertId + '.' + type;
            let existFiles = await downloadImg([{url, fileName}]);
            let curPath = path.join(__ROOT, 'src/image', fileName);  // 当前文件路径
            let result = await cosService.sliceUploadFile(curPath, fileName, constant.DIR_PATH.DOWNLOAD);
            console.log('existFiles =========', existFiles);
            console.log('result =========', result);
            fs.unlinkSync(curPath);  // 删除文件

            const cosUrl = cosUrlConfig.tl + '/images/download/' + fileName;
            console.log('cosUrl 222=========', cosUrl);
            return ctx.body = {
                result: cosUrl
            };
        }
        console.log('results =========', results);
        const fileName = results[0].id + '.' + results[0].type;
        const cosUrl = cosUrlConfig.tl + '/images/download/' + fileName;
        console.log('cosUrl =========', cosUrl);
        return ctx.body = {
            result: cosUrl
        };
    }


    async test(ctx) {
        console.time('test=====');
        const { start = 1, len = 2} = getParams(ctx);  // page

        const [err, html] = await httpService.get({
            url: 'https://my.xiapibuy.com/api/v2/search_items/?by=relevancy&keyword=tops&limit=50&match_id=22500015&newest=0&order=desc&page_type=shop',  // 获取热门图片
            qs: {},
        });

        console.log('data ======', html);



        // 从https://xiapi.xiapibuy.com/获取
        // https://xiapi.xiapibuy.com/shop/98354825/search?page=1&sortBy=pop
        // https://xiapi.xiapibuy.com/api/v2/search_items
        // const puppeteer = require('puppeteer');
        //
        // const browser = await puppeteer.launch({headless: true,
        //     //如果是访问https页面 此属性会忽略https错误
        //     ignoreHTTPSErrors: true,
        // });
        //
        //
        // const page = await browser.newPage();
        // await page.setRequestInterception(true);
        // page.on('request', interceptedRequest => {
        //     if (interceptedRequest.url().endsWith('.png') || interceptedRequest.url().endsWith('.jpg'))
        //         interceptedRequest.abort();
        //     else
        //         interceptedRequest.continue();
        // });
        //
        // let imgArr = [];
        // for (let i=0; i<len;i++) {
        //     await page.goto(`https://xiapi.xiapibuy.com/shop/98354825/search?page=${start+i}&sortBy=pop`, {timeout: 0,  waitUntil: "networkidle2" });
        //
        //     const frame = await page.mainFrame();
        //     const bodyHandle = await frame.$('html');
        //     const html = await frame.evaluate(body => body.innerHTML, bodyHandle);
        //     await bodyHandle.dispose();  //销毁
        //     const $ = cheerio.load(html);
        //
        //     let data = $(".shop-search-result-view__item a").each((index, ele) => {
        //         let url = 'https://xiapi.xiapibuy.com' + $(ele).attr('href');
        //         let obj = {
        //             url,
        //             name: $(ele).find('._1NoI8_').text(),
        //         };
        //         console.log('obj =====', obj);
        //         imgArr.push(obj);
        //     });
        // }
        //
        // console.log('imgArr ======', imgArr.length);
        // console.timeEnd('test=====');
    }

}


module.exports = new ApiController();
