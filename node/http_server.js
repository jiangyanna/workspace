'use strict'
var http = require("http");
/**
 * http服务器程序
 */
//创建httpserver，并传入回调函数，回调函数接收request和response对象
var server = http.createServer(function(request,response){
    console.log('request.method:'+request.method+"  request.url:"+request.url);//获得http请求的method和url
    //将http响应写入response
    response.writeHead(200,{'Content-Type':'text-html'});
     response.end("<h1>Hello World</h1>");
});

server.listen(8080);
console.log("server is running at http://127.0.0.1:8080");