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
const  iconv = require('iconv-lite');

class BookController {
    constructor() {

    }

    async getBookList(ctx) {
        const {bookSrc = 'biquge'} = getParams(ctx);
        let url = apiUrl.book[bookSrc];

        let [err, html] = await httpService.get({
            url: apiUrl.book[bookSrc],
            qs: {},
        });

        if (err) {
            console.error('getBookList err: ', err);
        }
        html = iconv.decode(html, 'gbk');

        const $ = cheerio.load(html);

        let data = $(".article").each((index, ele)=>{
            let url = $(ele).attr('href');

            console.log($(ele, '.title').eq(0).text());
            // console.log('url =====', $(ele).text());
            // let temp = url.split('/');
            // let obj = {
            //     desc: $(ele).attr('alt'),
            //     id: temp[temp.length-1],
            //     img: url,
            //     fileName: $(ele).attr('title'),
            // };
            // console.log('obj =====', obj);
            // imgArr.push(obj);
        });

    }


    async getBookApiByShenQi(ctx) {
        const host = 'http://www.api.zhuishushenqi.com';
        let url = ctx.request.url.substr(9);
        let { chapterUrl } = getParams(ctx);
        //
        //
        // if (chapterUrl) {
        //     url = chapterUrl;
        // } else {
        //     url = apiUrl.book.zhuishushenqi + url;
        // }
        url = host+url;

        console.log('getBookApiByShenQi url ====', url);
        let [err, result] = await httpService.get({
            url,
            qs: {},
        });

        // console.log('book result ====', result);

        if (!err && result) {
            ctx.body = result;
        }
    }

    async getBookContentByShenQi(ctx) {
        const host = 'http://chapter2.zhuishushenqi.com';
        let url = ctx.request.url.substr(13);
        let { chapterUrl } = getParams(ctx);

        // if (chapterUrl) {
        //     url = chapterUrl;
        // } else {
        //     url = apiUrl.book.zhuishushenqi + url;
        // }
        url = host+url;
        console.log('getBookContentByShenQi url ====', url);
        let [err, result] = await httpService.get({
            url,
            qs: {},
        });

        // console.log('book result ====', result);

        if (!err && result) {
            ctx.body = result;
        }
    }

}

module.exports = new BookController();
