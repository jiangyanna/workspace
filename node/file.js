'use strict'
/*node.JS内置的fs模块是文件系统模块，负责文件读写
**/
var fs = require("fs");

/*imagPath变量存储要读取的图片路径
**/
var imgPath = "../../fe-exercise/image-video-audio/01.jpg";

/*异步读取文本文件
**/
fs.readFile("./node/main.js","utf-8",function(err,data){
    if(err){
        console.log("read file error:"+err);
    }else{
        console.log("success,file content: "+data);
    }
});

/*异步读取二进制文件
*不传文件编码，回调函数的data将返回一个Buffer对象,
*该Buffer对象是一个包含0或多个字符的数组（注意和Array不同)
**/
fs.readFile(imgPath,function(err,data){
    if(err){
        console.log("error:"+err);
    }else{     
        //console.log("data:"+data);
        console.log("data.length:"+data.length+"bytes");    
    }
});

/*string类型与buffer类型转换
**/
(function bufferStr(){
    var str="hello everyone";
    var buffer = Buffer.from(str,"utf-8");
    console.log("buffer:"+buffer);
    console.log("str:"+buffer.toString("utf-8"));
})();


/*文件同步读取,readFileSync不接收回调函数，直接返回结果，
*若同步读取文件发生错误，需要try...catch捕获
**/
try{
    var data = fs.readFileSync("./node/main.js","utf-8");
    console.log("file sync read success:"+data);
}catch(err){
    console.log("file sync read failed:"+err);
}

/*将数据写入文件fs.writeFile()异步方法，接受三个参数，分别是文件名，数据，回调函数.
*如果传入的数据是String，默认按照utf-8编码写入文本文件。如果传入的是Buffer，写入的是二进制文件，
*回调函数只关心是否成功，因此只有一个err参数
**/
var data = "hello,you are going to be written";
fs.writeFile("./node/write-file-2.txt",data,function(err){
    if(err){
        console.log("write file async failed:"+err);
    }else{
        console.log("success");
    }
});

/*同步写文件:使用同步读取文件方法返回的数据写文件，异步读取返回的数据获取不到
**/
// fs.writeFileSync("01.jpg",fs.readFileSync(imgPath));

/*fs.stat()方法，可以异步获取文件大小、创建时间等信息，该方法返回一个Stat对象，告知文件或目录的详细信息
**/
fs.stat("./node/01.jpg",function(err,stat){
    if(err){
        console.log("get file info failed:"+err);
    }else{
        console.log("isFile:"+stat.isFile());//是否是文件
        console.log("isDirectory:"+stat.isDirectory());//是否为目录
        if(stat.isFile){
            console.log("file.size:"+stat.size);//文件大小
            console.log("file.birthtime:"+stat.birthtime);//文件创建时间
            console.log("file.mtime:"+stat.mtime);//文件修改时间
        }
    }
});

/*fs.statSync()方法，可以同步获取文件大小、创建时间等信息，该方法返回一个Stat对象，告知文件或目录的详细信息
**/
var fileStat = fs.statSync("./node/write-file-1.txt");
console.log("statSync isFile:"+fileStat.isFile()+"    statSync file.size:"+fileStat.size);