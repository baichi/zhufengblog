## 1. 初始化项目
先在任意盘符下打开命令行窗口
### 1.1 创建项目文件夹并进入此文件夹
```
mkdir zhufengblog
cd zhufengblog
```

### 1.2 初始化项目配置文件
```
npm init -y
```

### 1.3 创建git忽略文件
```
touch .gitignore
```
内容写入
```
node_modules
.idea
```

> node_modules 存放node依赖的框架
> .idea 里webstorm的配置文件


## 2. 实现路由

|路径|名称|
|:-----|:-----|
|/|首页|
|/user/sign_up|用户注册|
|/user/sign_in|用户登录|
|/user/sign_out|登出|
|/article/add|发表文章|

