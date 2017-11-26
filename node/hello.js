'use strict';

var str="hello";
var name = "hello.js";
function greet(name){
    console.log(str+','+name+'!');
}
function getName(){
    console.log("name="+name);
}

//对外暴露接口
module.exports = {
    greet:greet,
    getName:getName
};