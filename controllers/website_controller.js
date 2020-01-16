'use strict';
/**
 * 网站相关请求
 * @author CTJ
 * @date 2019/10/14
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

class WebsiteController {
    constructor() {
        this.defaultWebData = [];   // 缓存默认网页数据

    }

    async getWebList(ctx) {
        const {uid} = getParams(ctx);

        if (!uid) {
            if (this.defaultWebData.length === 0) {
                const sql = 'select * from website order by kind, sort';
                let [err, data] = await tlSqlService.querySafe(sql);
                console.log('data =====', data);
                this.defaultWebData = this._formatData(data);
            }

            return ctx.body = this.defaultWebData;
        }

    }

    _formatData(data) {
        if (!data) {
            return;
        }

        let list = {};
        for (let {id, name, url, image, des, kind, sort} of data) {
            if (!list[kind]) {
                list[kind] = [];
            }
            list[kind].push({
                id, name, url, image, des, kind, sort,
            });
        }

        return list;
    }


    async addWeb(ctx) {
        const {name, url, image, des, kind, sort} = getParams(ctx);
        let sql = 'insert into website(name, url, image, des, kind, sort) values(?,?,?,?,?,?)';
        let [err, result] = await tlSqlService.querySafe(sql, [name, url, image, des, kind, sort]);

        if (err) {
            return cxt.status = 501
        }

        ctx.body = result;
    }

    async updateWeb(ctx) {
        const params = getParams(ctx);
        if (!params.id) {
            return ctx.status = 502;
        }
        let sql = `UPDATE website SET `;
        let param = [];
        for (let key in params) {
            if (key == 'id') {
                continue;
            }
            let str = `${key}=?, `;
            param.push(params[key]);
            sql += str;
        }

        sql = sql.substr(0, sql.length -2); // 有空格
        sql = `${sql} where id=?`;
        param.push(params.id);


        let [err, result] = await tlSqlService.querySafe(sql, param);

        ctx.body = result;
    }

}

module.exports = new WebsiteController();
