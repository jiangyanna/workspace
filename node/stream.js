/**
 * stream：Nodejs提供的仅在服务器端可用的模块，目的是支持“流”这种数据结构。
 * 流是一种抽象的数据结构，比如敲键盘时可以把每个字符依次连起来，看成字符流。
 * 从键盘上输入到应用程序的流，是标准输入流（stdin）；应用程序把字符输出到显示器上，是标准输出流（stdout）
 * Node.js中，流是一个对象，可以响应流的事件：data事件表示流已经可以读取了；end事件表示流已经到末尾了，没有数据
 * 可以读取了；err事件表示出错了
 */

'use strict'
var fs = require("fs");

/**
   * 所有可以读取数据的流都继承自stream.Readable,所有可以写入的流都继承自stream.Writable
   */
 /**
  * 使用文件流读取文本内容
  */
var rs = fs.createReadStream("./node/main.js","utf-8");
/**
 * data事件可能会有多次，每次传递的chunk是流的一部分数据
 */
rs.on("data",function(chunk){
    console.log("readstream data events:"+chunk);
});
rs.on("end",function(){
    console.log("readstream end events");
});
rs.on("err",function(err){
    console.log("readstream err events:"+err);
});

/**
 * 以流的形式寫入文件，只要不断调用write()方法，最后以end()结束
 */
var ws1 = fs.createWriteStream("./node/output1.txt","utf-8");
ws1.write("by use of write stream to write text content file...   \n\n");
ws1.write("    \tnow this file is end...\n");
ws1.end();
var ws2 = fs.createWriteStream("./node/output2.txt");
ws2.write(new Buffer("使用stream写入二进制数据...\t\t\t"),"utf-8");
ws2.write(new Buffer("\t\t\tending"));
ws2.end();
  

/**
 * pipe：两个流可以串起来，一个Readable流和一个writable流串起来后，所有数据自动从Readable流进入到Writable流，这种操作叫pipe
 * Node.js中，Readable流的pipe()方法可以实现上述功能，用pipe()方法把一个文件流和另一个文件流串起来，源文件的所有数据自动写入
 * 到目标文件，实现了文件的复制功能
 */
var rstream = fs.createReadStream("./node/main.js");
var wstream = fs.createWriteStream("./node/copied.js");
/**默认的，Readable流读取完毕，触发end事件后，会自动关闭Writable流，如果不希望自动关闭Writable流，可以传入参数 */
//rstream.pipe(wstream,{end:false});
rstream.pipe(wstream);