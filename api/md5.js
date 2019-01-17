const md5=require("md5");
// //盐料
// var passWord="123456";
// passWord=md5(passWord+"ele@123");
// console.log(passWord);
// //将passWord放到你的集合当中。

//本项目统一使用以下加密方式，初始密码六个八；
var str="888888"
str=md5(str+"ele@888")
console.log(str)  //e99acb14791098e5fb5b5f8dd025b68e

// function jie(md5Str){
//     var str="";
//     // if(1==1){console.log("iloveyou")}
//     for(var i=0;i<1000;i++){
//         if(md5Str==md5(i.toString())){
//             str=i;
//             break;
//         }
//     }
//     return str;
// }
// console.log(jie("c20ad4d76fe97759aa27a0c99bff6710"))

console.log(Date.now())
