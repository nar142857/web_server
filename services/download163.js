const puppeteer = require('puppeteer');
var tools = require('./tools.js');
var request = require('request');
const fs = require('fs');

var delay = 2000;

class Download163 {
    constructor(url) {
        this.url = url;
        this.init();
    }

    async init() {
        console.log('正在启动浏览器...');
        this.browser = await puppeteer.launch({headless: false});
        console.log('正在打开新页面...');
        this.page = await this.browser.newPage();
        await this.loadSport163(this.url);

        console.log('正在关闭浏览器...');
        await tools.timeout(delay);
        await this.browser.close();
    }

    async loadSport163(url) {
        console.log('163 is ready ----------------');
        let page = this.page;
        await page.goto(url);

        try {
            await page.keyboard.down('PageDown');
            await page.keyboard.up('PageDown');
            console.log('向下翻页......');
            await tools.timeout(3000);
            // 开始抓取文章列表页
            var listMap = await page.evaluate(() => {
                var alist = [...document.querySelectorAll('.topnews_news ul li a')];
                return alist.map((el) => {
                    return {
                        href: el.href,
                        title: el.innerText
                    }
                });
            });
            for (var i = 0; i < listMap.length; i++) {
                var a = listMap[i].href;
                await this.loadContent(a);
            }
        } catch (e) {
            console.log(e);
        }

    }

    async loadContent(url) {
        try {
            await tools.timeout(2000);
            let page = this.page;
            await page.goto(url);
            // 这里使用tools请求服务器，获取到 网站解析方式，其实就是各个节点
            // 的选择器 page.$eval的第一个参数就是一个css选择器。网易体育的新闻详情页差不多就如下：
            /**
             {
                 "id": "0",
                 "target": "163",
                 "title": "#epContentLeft h1",
                 "meta": "meta[name=keywords]",
                 "content": "#endText p",
                 "source": "#ne_article_source"
               }
             */
            var rule =  {
                "id": "0",
                "target": "163",
                "title": "#epContentLeft h1",
                "meta": "meta[name=keywords]",
                "content": "#endText p",
                "source": "#ne_article_source"
            }
            var title = await page.$eval(rule.title, el => el.innerText);
            var source = await page.$eval(rule.source, el => el.innerText);

            var contentP = await page.evaluate(e => {
                var pList = [...document.querySelectorAll(e)];
                return pList.map(el => {
                    return {
                        p: el.innerHTML
                    };
                });
            },rule.content);
            var meta = await page.$eval(rule.meta, el => el.content);

            var data = {
                title: title,
                source: source,
                content: contentP,
                meta: meta
            }
            console.log("开始保存在文件夹------------------------->"+JSON.stringify(data))
            fs.writeFile("./wfile.txt", JSON.stringify(data)+"\r\n" ,{flag:'a',encoding:'utf-8',mode:'0666'}, function(err) {
                if(err) {
                    return console.log(err);
                }
            });

        } catch (e) {
            console.log(e);
        }
    }
}
module.exports = Download163;
