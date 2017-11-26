'use strict'
var url = require("url");//用于解析url

//parse url
console.log("url:"+JSON.stringify(url.parse("https://www.liaoxuefeng.com/wiki/0014")));//parse()方法将一个字符串解析为一个Url对象

// parse incomplete url:
console.log(url.parse('/static/js/jquery.js?name=Hello%20world'));

// construct a url:
console.log(url.format({
    protocol: 'http',
    hostname: 'localhost',
    pathname: '/static/js',
    query: {
        name: 'Nodejs',
        version: 'v 1.0'
    }
}));