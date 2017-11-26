'use strict'

process.on("exit",function(){//在程序即将退出时执行回调函数
    console.log("nodejs is about to exit");
});
process.nextTick(function(){//在下一次事件响应中执行代码
    console.log("this info is printed in next events");
});
//判断js执行环境，根据浏览器（window）和node环境（global）提供的全局名称来判断
function jsenvironment(){
    if(type(window)==='undefined'){
        console.log("the js is excuted in nodejs");
    }else{
        console.log("the js is running in browser");
    }
}