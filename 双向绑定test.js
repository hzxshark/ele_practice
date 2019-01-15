注意属性的来源
原来的属性默认为True
而defineproperty里面的默认为false

var obj={

}
var obj2=Object.defineProperty(obj,"age",{
    value:24,
    writable:true,
    enumerable:true
})
console.log(obj2)
console.log(obj2.age)
console.log(obj.age)
obj.age=18
obj.uesrName="赵四"
for(var key in obj){
    console.log(key,obj[key])
}
console.log(obj.age)
console.log(obj.uesrName)