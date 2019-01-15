//es6定义一个类
class Tag{
    constructor(){
        this.userName="haha";
    }
    run(){
        console.log(this.age);
    }
}
//new一个实例出来
var tag=new Tag();


//下面值继承
class Desk extends Tag{
    constructor(userName){
        super(userName)//这里是传参
    }
}

var desk=new Desk("heihei");
console.log(desk.userName);//这里输出的是“haha”实现了继承