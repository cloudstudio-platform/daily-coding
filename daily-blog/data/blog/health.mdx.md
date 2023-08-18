---
title: '【腾讯云 Cloud Studio 实战训练营】Cloud Studio实现健康上报小程序（代码开源）'
subTitle: 'Cloud Studio实现健康上报小程序'
summary: '本文我将使用Cloud Studio 以及Flutter完成自己的一个博客平台的搭建。并且会将该项目作为模版，供大家使用。'
tags: ['用户体验']
date: '2023-07-22'
author: '用户2561063'
description: Cloud Studio 是腾讯云自主研发的在线 IDE 集成开发环境。用户可以通过 Cloud Studio 创建项目的工作空间，进行在线编程、开发、调试等操作。Cloud Studio 还提供可分享的在线 IDE 开发环境功能。本文描述如何通过Cloud Studio&Flutter完成跨平台博客的搭建
keywords: 在线编程,WebIDE,CloudIDE,云端IDE,在线IDE,云端开发工具,在线集成开发环境,开发环境分享,代码托管,在线开发,在线调试,软件团队协作,CODING,Cloud Studio,Web IDE,Flutter,apk,流水线
---

![](https://help-assets-1257242599.cos.ap-shanghai.myqcloud.com/enterprise/2023/3/3-1.png)

# 前言

Cloud Studio 是基于浏览器的集成式开发环境（IDE），为开发者提供了一个永不间断的云端工作站。用户在使用 Cloud Studio 时无需安装，随时随地打开浏览器就能在线编程。 Cloud Studio 作为在线 IDE，包含代码高亮、自动补全、Git 集成、终端等 IDE 的基础功能，同时支持实时调试、插件扩展等，可以帮助开发者快速完成各种应用的开发、编译与部署工作。

本项目优先采用在线IDE-Cloud Studio进行开发，这个项目是年前做的，是一个小型的课设案例，一直未开源，项目有两个端（小程序和后台）一个服务端（spring）


项目素材：


![](https://help-assets-1257242599.cos.ap-shanghai.myqcloud.com/enterprise/2023/3/3-2.png)


技术栈：

-vue2


-java


# 实验介绍


通过本次项目，实现一个部署在云端的服务，可供学生健康上报，供管理员查看导出


# 产品介绍


*Cloud Studio 是基于浏览器的集成式开发环境（IDE），为开发者提供了一个永不间断的云端工作站。用户在使用 Cloud Studio 时无需安装，随时随地打开浏览器就能在线编程。 Cloud Studio 作为在线 IDE，包含代码高亮、自动补全、Git 集成、终端等 IDE 的基础功能，同时支持实时调试、插件扩展等，可以帮助开发者快速完成各种应用的开发、编译与部署工作。*


# 注册Cloud Stdio


[注册Cloud Studio](https://ide.cloud.tencent.com/?from_column=20420&from=20420)，这里注册和登录 Cloud Studio 非常方便，提供了下面三种注册方式：

-使用 CODING 账号授权注册/登录

-使用微信授权注册/登录 （本文使用方式）


-使用 GitHub 授权注册/登录


==coding可对代码进行托管，微信授权注册后可以在这里绑定==


![](https://help-assets-1257242599.cos.ap-shanghai.myqcloud.com/enterprise/2023/3/3-3.png)


# 后端Spring服务

**创建项目**


点击【空间模板】【框架模板】选择Spring boot


![](https://help-assets-1257242599.cos.ap-shanghai.myqcloud.com/enterprise/2023/3/3-4.png)


**上传项目**


打开后先等待安装服务

![](https://help-assets-1257242599.cos.ap-shanghai.myqcloud.com/enterprise/2023/3/3-5.png)


安装完成后，将资源文件进行替换


![](https://help-assets-1257242599.cos.ap-shanghai.myqcloud.com/enterprise/2023/3/3-6.png)


等待上传完成

![](https://help-assets-1257242599.cos.ap-shanghai.myqcloud.com/enterprise/2023/3/3-7.png)


完成后，pom.xml文件需要修复替换


```shell
​
 <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>8.0.30</version>
        </dependency>

 <dependency>
            <groupId>com.google.code.gson</groupId>
            <artifactId>gson</artifactId>
            <version>2.10.1</version>
        </dependency>
​
```

**数据库连接与导入**


这里没有使用IDE提供的数据库，因为我的navicat连接不上，所以就放弃了，这里用的是外网的服务器

宝塔创建数据库


![](https://help-assets-1257242599.cos.ap-shanghai.myqcloud.com/enterprise/2023/3/3-8.png)

导入sql文件

![](https://help-assets-1257242599.cos.ap-shanghai.myqcloud.com/enterprise/2023/3/3-9.png)


修改Spring配置

![](https://help-assets-1257242599.cos.ap-shanghai.myqcloud.com/enterprise/2023/3/3-10.png)


点击启动


![](https://help-assets-1257242599.cos.ap-shanghai.myqcloud.com/enterprise/2023/3/3-11.png)


接口测试

点击【端口】再点击网络图标


![](https://help-assets-1257242599.cos.ap-shanghai.myqcloud.com/enterprise/2023/3/3-12.png)


输入接口地址，进行访问，到这里说明spring后端服务已经全部跑通了


![](https://help-assets-1257242599.cos.ap-shanghai.myqcloud.com/enterprise/2023/3/3-13.png)


或者通过HTTP测试工具


![](https://help-assets-1257242599.cos.ap-shanghai.myqcloud.com/enterprise/2023/3/3-14.png)







# Vue后台管理


**创建项目**


点击【空间模板】【新建模板】【手动新建】


![](https://help-assets-1257242599.cos.ap-shanghai.myqcloud.com/enterprise/2023/3/3-15.png)


**编辑模板信息**


点击【新建模板】【手动新建】填写模板信息


![](https://help-assets-1257242599.cos.ap-shanghai.myqcloud.com/enterprise/2023/3/3-16.png)


**选择环境镜像**


之前用的是node16 这里不可选，暂时先用这个吧

![](https://help-assets-1257242599.cos.ap-shanghai.myqcloud.com/enterprise/2023/3/3-17.png)


**上传资源文件**


![](https://help-assets-1257242599.cos.ap-shanghai.myqcloud.com/enterprise/2023/3/3-18.png)


修改接口，将所有localhost:8088改成https://jdcgqk-eeswco-8081.app.myide.io/


![](https://help-assets-1257242599.cos.ap-shanghai.myqcloud.com/enterprise/2023/3/3-19.png)




编译运行


```shell
​
 npm install
​
```


![](https://help-assets-1257242599.cos.ap-shanghai.myqcloud.com/enterprise/2023/3/3-20.png)


由于cloud stdio node环境版本太高，我这里版本用的是16的所以会有很多报错，尝试了不行，我们就不演示管理后台了


![](https://help-assets-1257242599.cos.ap-shanghai.myqcloud.com/enterprise/2023/3/3-21.png)


# 小程序


打开微信开发者工具启动小程序


![](https://help-assets-1257242599.cos.ap-shanghai.myqcloud.com/enterprise/2023/3/3-22.png)


修改接口Host


*request.js*


```shell
​
const GET = 'GET';
const POST = 'POST';

const baseURL = 'https://jdcgqk-eeswco-8081.app.myide.io';  // 接口请求地址

function request(method, url, data) {
  wx.showLoading({
    title: '请求中..',
  })
  console.log(baseURL + url)
    return new Promise(function(resolve, reject) {
        let header = {
            'content-type': 'application/json'
        };
        wx.request({
            url: baseURL + url,
            method: method,
            data: method === POST ? JSON.stringify(data) : data,
            header: header,
            success(res) {
              console.log(res.data);
              //请求成功返回数据
              resolve(res.data);
              wx.hideLoading()
          },
          fail(err) {
            wx.hideLoading()
              //请求失败
              reject(err)
              console.log(err);
          },
             complete: function () {
                // 配对使用（loading消失）
                wx.hideLoading();
             }
        })
    })
}

const API = {
  // 登录
  login: (data) => request(GET, `/login`, data),
  insert_healthy: (data) => request(GET, `/insert_healthy`, data),
  query_user:(data)=>request(GET, `/query_user`, data),
  query_healthy:(data)=>request(GET, `/query_healthy`, data),
  edit_user:(data)=>request(GET, `/user_edit`, data),
  insert_leavschool:(data)=>request(GET, `/insert_leavschool`, data),
  query_leavschool:(data)=>request(GET, `/query_leavschool`, data),
};

module.exports = {
  API: API
}
​
```

小程序登录测试


![](https://help-assets-1257242599.cos.ap-shanghai.myqcloud.com/enterprise/2023/3/3-23.png)


![](https://help-assets-1257242599.cos.ap-shanghai.myqcloud.com/enterprise/2023/3/3-24.png)


![](https://help-assets-1257242599.cos.ap-shanghai.myqcloud.com/enterprise/2023/3/3-25.png)


![](https://help-assets-1257242599.cos.ap-shanghai.myqcloud.com/enterprise/2023/3/3-26.png)


# 总结


本次项目用到了在线IDE：Cloud stdio，不得不说真的很方便，我经过这次体验总结出几个优缺点


|Cloud stdio|优点|缺点|
|-|-|-|
|启动相关|方便快捷，有提示和各种插件|不能同时启动多个项目，像上面的多端就不适合|
|环境版本| |缺少PHP等环境，另外Node版本能选择的太少等问题|
|界面| 整洁清爽，容易快速上手，可选择基础框架快速开发|新建工作空间不能使用本地代码进行上传只能从仓库拉取|
|费用| |标准版包月300有点贵|


# 建议:


*添加多个环境，以及多版本选择*


![](https://help-assets-1257242599.cos.ap-shanghai.myqcloud.com/enterprise/2023/3/3-27.png)

































