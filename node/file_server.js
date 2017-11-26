'use strict'
var 
    fs = require("fs"),
    http = require("http"),
    url = require("url"),//用于解析url
    path = require("path");//处理本地文件目录



var workDir = path.resolve('.');//解析当前目录
console.log("surrent directory:"+workDir);
var filePath = path.join(workDir,'node','hello.html');//组合完整的文件路径
console.log("filePath:"+filePath);


/**
 * file_server
 */
var root = path.resolve(process.argv[2]||'.');// 从命令行参数获取root目录，默认是当前目录:
console.log("static root dir:"+root);
var server = http.createServer(function(request,response){
    var pathname = url.parse(request.url).pathname;//获得请求url的path
    var filepath = path.join(root,pathname);//获得对应的本地文件路径
    fs.stat(filepath,function(err,stat){//获取文件状态
        if(!err&&stat.isFile()){ //没有出错且文件存在
            console.log("200 request url:"+request.url);
            response.writeHead(200);//响应成功
            /**
             * response对象本身是一个writable stream，直接用pipe()方法实现自动读取文件内容并输出到HTTP响应 
             */
            fs.createReadStream(filepath).pipe(response);//将文件流导向response
        }else{//出错或文件不存在
            console.log("request error:"+err);
            console.log("404:"+request.url);
            response.writeHead("404");
            response.end("404 not found");
        }
    });
});
server.listen(8080);
console.log("server is running at http://127.0.0.1:8080");