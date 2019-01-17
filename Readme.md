
####安装mongodb

#如果之前没有安装过mongodb数据库的，请先安装数据库然后运行数据库并挂起；
    https://www.jianshu.com/p/4bda3b7a9ea6
#安装成功后，要想使用数据库首先要对数据库进行挂起。（如果上一步已经挂起请忽略此条）；
    1、创建一个用于存放数据库文件的文件夹。
    2、mongod --dbpath d:\mongo
#新建一个终端运行；
    mongo    //这样就进入到mongo的环境了哦
#设置数据库名称；
    use eleme     
#设置初始的超级管理员密码与账户(超级管理员账户：greentea;密码： 888888)
    db.adminInfoList.insert({adminName:'greentea',passWord:'e99acb14791098e5fb5b5f8dd025b68e',addTime:1547733609361})


####启动node服务

#进入到api文件夹下安装依赖；
    cnpm i 或者 npm i
#启动服务
    node s1.js   如果时mac用户  sudo node s1.js


####启动后台管理系统

#进入到manage文件夹下装依赖
    cnpm i
#启动服务
    npm run dev
    

####启动前端站点页面
    同上