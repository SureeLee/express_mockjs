# express_mockjs

a demo combine express and mockjs

1. 使用express应用生成器安装express
> npm install express-generator -g

2. 使用supervisor让express可以热部署
> npm install supervisor --save   
> 启动  
> supervisor ./bin/www  

3. 安装mock.js
> npm install mockjs --save

4. npm5.0后增加了package-lock.json文件，所以无法再通过在package.json里写入需要的module，然后npm install的方式来安装module  
所以需要手动每次`npm install xx --save`，用--save写入package.json

