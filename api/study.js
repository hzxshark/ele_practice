//学习代码
const md5=require("md5");
// const str="12";
// // console.log(md5(str));
//
// //盐料
// var passWord="123456";
// passWord=md5(passWord+"ele@123");
// console.log(passWord);
// //将passWord放到你的集合当中。
//
// //登陆：
// var passWord="123456";
// passWord=md5(passWord+"ele@123");
var str="888888"
str=md5(str+"ele@888")
console.log(str)


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
