---
title: '腾讯云 Cloud Studio 实战训练：快速构建React完成H5页面还原'
subTitle: '快速构建React完成H5页面还原'
summary: '在这个博客中，我将介绍如何使用Cloud Studio打造一个基于Spring Boot和Vue的学生管理系统。该系统旨在提供一个简单而功能丰富的平台，用于管理学生的信息和课程，并提供一系列功能来增强教育管理的效率和便捷性。'
tags: ['用户体验']
date: '2023-07-22'
author: 'Maynor'
description: Cloud Studio 是腾讯云自主研发的在线 IDE 集成开发环境。用户可以通过 Cloud Studio 创建项目的工作空间，进行在线编程、开发、调试等操作。Cloud Studio 还提供可分享的在线 IDE 开发环境功能。本文描述如何通过Cloud Studio&Flutter完成跨平台博客的搭建
keywords: 在线编程,WebIDE,CloudIDE,云端IDE,在线IDE,云端开发工具,在线集成开发环境,开发环境分享,代码托管,在线开发,在线调试,软件团队协作,CODING,Cloud Studio,Web IDE,Flutter,apk,流水线
---


# 0⃣️前言

腾讯云 Cloud Studio 是一款在线开发工具(云IDE)，它能帮助用户减少安装IDE的成本，提供一站式的在线代码开发、编译、运行和存储服务。

# 1️⃣介绍

**1.项目介绍**

我们经常会遇到远程办公的场景，下面我们打算用云 IDE Cloud Studio 快速搭建，并开发还原一个移动端 React H5 的简版点餐系统页面，从 0 到 1 体验云 IDE 给我们带来的优势，不需要装各种环境，简单易用，开箱即可上手。

![](https://help-assets-1257242599.cos.ap-shanghai.myqcloud.com/enterprise/2023/5/5-1.png)


**2.产品介绍**


Cloud Studio 是基于“浏览器”的集成式开发环境（IDE），为开发者提供稳定的云端工作站，在使用 Cloud Studio 时无需安装，打开浏览器即可快速启动和开发项目，底层资源可以自动弹性扩缩，极大地节省成本，低代码开发省时又省力。


![](https://help-assets-1257242599.cos.ap-shanghai.myqcloud.com/enterprise/2023/5/5-2.png)


-基于 Web 端的代码编辑器，包含代码高亮、自动补全、Git 集成、终端等 IDE 的基础功能，同时支持实时调试、插件扩展等，提升开发、编译与部署工作效率 ;
-支持远程访问云服务器，为腾讯云 SCF 行业用户提供开发-测试-部署完整闭环的云原生开发体验 ;


# 2️⃣实战训练


点击以下链接跳转到官网，并点击“注册/登录”。

[Cloud Studio官网](https://www.cloudstudio.net/?utm=csdn)


这里Cloud Studio 提供了三种注册方式：

-使用 CODING 账号授权注册/登录


-使用微信授权注册/登录


-使用 GitHub 授权注册/登录


本文选择第一种方式（ CODING 作为代码管理平台，方便将项目发布到仓库）


![](https://help-assets-1257242599.cos.ap-shanghai.myqcloud.com/enterprise/2023/5/5-3.png)


**2.创建工作空间**


首页可以看到 Cloud Studio 提供了很多模板（框架模板、云原生模板、建站模板），都是预装环境了，开箱即用的模板，可以快速搭建环境进行代码开发，同时 Cloud Studio 也对所有新老用户每月赠送 3000 分钟的工作空间免费时长。


![](https://help-assets-1257242599.cos.ap-shanghai.myqcloud.com/enterprise/2023/5/5-4.png)


我们直接点击"React"即可自动初始化一个 React 的工作空间，等待不到 10s 左右（与带宽网速差异有区别），云 IDE 就已经初始化完毕。


![](https://help-assets-1257242599.cos.ap-shanghai.myqcloud.com/enterprise/2023/5/5-5.png)


**3.配置工作环境**


安装 antd-mobile:


```shell
​
 yarn add antd-mobile@^5.32.0
​
```


![](https://help-assets-1257242599.cos.ap-shanghai.myqcloud.com/enterprise/2023/5/5-6.png)


安装less：


```shell
​
yarn add -D less@^3.12.2 less-loader@^7.0.1
​
```

![](https://help-assets-1257242599.cos.ap-shanghai.myqcloud.com/enterprise/2023/5/5-7.png)


暴露 webpack 配置文件：


```shell
​
npm run eject
​
```


![](https://help-assets-1257242599.cos.ap-shanghai.myqcloud.com/enterprise/2023/5/5-8.png)


输入 ‘y’ 后，项目会自动进行解构操作。

接着找到 config/webpack.config.js 文件，设置 css 相关代码(新增 Less 代码)


```shell
​
const lessRegex = /\.(less)$/;
const lessModuleRegex = /\.module\.(less)$/;
​
```


继续向下搜索sass,仿照sass的配置，进行less的配置


```shell
​
// less
{
  test: lessRegex,  // 有改动
  exclude: lessModuleRegex,  // 有改动
  use: getStyleLoaders(
    {
      importLoaders: 3,
      sourceMap: isEnvProduction
        ? shouldUseSourceMap
        : isEnvDevelopment,
    },
    'less-loader'  // 有改动
  ),
  sideEffects: true,
},
{
  test: lessModuleRegex,  // 有改动
  use: getStyleLoaders(
    {
      importLoaders: 3,
      sourceMap: isEnvProduction
        ? shouldUseSourceMap
        : isEnvDevelopment,
      modules: {
        getLocalIdent: getCSSModuleLocalIdent,
      },
    },
    'less-loader'  // 有改动
  ),
},
​
```


安装 normalize：


```shell
​
yarn add -D normalize.css@^8.0.1
​
```


**4.替换代码素材**


传项目需要的素材：
以前上传服务器代码，需要使用 Scp 命令或者装 Remote SSH 插件支持，Cloud Studio 可以很方便默认支持文件上传与下载等常规的操作，与本地 IDE 体验一致：

-可以直接拖动文件到 IDE 编辑区域（本文使用方式）
-右击 IDE 编辑区域"上传"
所以我们直接将 img 文件夹拖动到src目录下即可。


![](https://help-assets-1257242599.cos.ap-shanghai.myqcloud.com/enterprise/2023/5/5-9.png)


*替换App.js主文件：*
以下是点餐系统的主要业务代码，复制到src/App.js直接替换即可。


```shell
​
import './App.css';
import React, { useState } from 'react'
import { NavBar, Toast, Swiper, SideBar, TabBar, Badge } from 'antd-mobile'
import {
  AppOutline,
  ExclamationShieldOutline,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'
import BannerImg from './img/banner.png'
import HotImg from './img/hot.png'
import Food1Img from './img/food1.png'
import Food2Img from './img/food2.png'
import CartImg from './img/cart.png'
import './index.less'
import "normalize.css"

function App() {
  const [activeKey, setActiveKey] = useState('1')

  const tabbars = [
    {
      key: 'home',
      title: '点餐',
      icon: <AppOutline />,
    },
    {
      key: 'todo',
      title: '购物车',
      icon: <UnorderedListOutline />,
      badge: '5',
    },
    {
      key: 'sale',
      title: '餐牌预告',
      icon: <ExclamationShieldOutline />,
    },
    {
      key: '我的',
      title: '我的',
      icon: <UserOutline />,
      badge: Badge.dot,
    },
  ]

  const back = () =>
    Toast.show({
      content: '欢迎进入点餐系统',
      duration: 1000,
    })


  const items = ['', '', '', ''].map((color, index) => (
    <Swiper.Item key={index}>
      <img style={{
        width: '100%'
      }} src={ BannerImg }></img>
    </Swiper.Item>
  ))

  const tabs =  [
    { key: '1', title: '热销' },
    { key: '2', title: '套餐' },
    { key: '3', title: '米饭' },
    { key: '4', title: '烧菜' },
    { key: '5', title: '汤' },
    { key: '6', title: '主食' },
    { key: '7', title: '饮料' },
  ]

  const productName = [
    '小炒黄牛肉',
    '芹菜肉丝炒香干',
    '番茄炒鸡蛋',
    '鸡汤',
    '酸菜鱼',
    '水煮肉片',
    '土豆炒肉片',
    '孜然肉片',
    '宫保鸡丁',
    '麻辣豆腐',
    '香椿炒鸡蛋',
    '豆角炒肉'
  ]
  const productList = productName.map((item, key) => {
    return {
      name: item,
      img: key % 2 === 1 ? Food1Img : Food2Img
    }
  })

  return (
    <div className="App">
      <NavBar onBack={back} style={{
        background: '#F0F0F0',
        fontWeight: 'bold'
      }}>点餐</NavBar>

      <div className='head-card'>
        <Swiper
          style={{
            '--border-radius': '8px',
          }}
          autoplay
          defaultIndex={1}
        >
          {items}
        </Swiper>
      </div>

      <div className='product-box'>
        <SideBar activeKey={activeKey} onChange={setActiveKey}>
          {tabs.map(item => (
            <SideBar.Item key={item.key} title={
              item.key === '1' ? <div>
              <div className='flex-center'>
                <img style={{
                  display: 'block',
                  width: '16px',
                  marginRight: '5px'
                }} src={ HotImg }></img>
                <div>{ item.title }</div>
              </div>
            </div> : item.title
            } />
          ))}
        </SideBar>
        <div className='product-right'>
          <div className='product-title'>热销</div>
          <div className='product-list'>
            {
              productList.map((item, key) => {
                return (
                  <div className='product-item'>
                    <div className='product-item-left'>
                      <img style={{
                        display: 'block',
                        width: '76px',
                        marginRight: '5px'
                      }} src={ item.img }></img>
                      <div className='product-item-left-info'>
                        <div>
                          <div className='product-item-left-info-name'>{ item.name }</div>
                          <div className='product-item-left-info-number'>月售{key + 1}0 赞{key * 5}</div>
                        </div>
                        <div className='product-item-left-info-price'>¥10</div>
                      </div>
                    </div>
                    <div className="cart">
                      <img style={{
                        display: 'block',
                        width: '30px',
                        marginRight: '5px'
                      }} src={ CartImg } onClick = { () =>
                        Toast.show({
                          content: '添加购物车成功'
                        }) }></img>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>

      <TabBar>
        {tabbars.map(item => (
          <TabBar.Item
            key={item.key}
            icon={item.icon}
            title={item.title}
            badge={item.badge}
          />
        ))}
      </TabBar>
    </div>
  );
}

export default App;
​
```


在 src 目录下，创建一个 index.less 文件，将以下 less 相关的代码复制到该文件中即可。


```shell
​
.head-card {
  padding: 10px 20px;
  box-sizing: border-box;
}

.flex-center {
  display: flex;
  align-items: center;
}

.product-box {
  display: flex;
  align-items: center;
  width: 100%;
  height: calc(100vh - 45px - 130px - 50px);
}

.product-right {
  flex: 1;
  height: 100%;
}

.product-title {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #000000;
  text-align: left;
  padding-bottom: 10px;
}

.product-list {
  height: calc(100% - 24px);
  overflow-y: auto;
}

.product-item {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  box-sizing: border-box;
  margin-bottom: 10px;
  &-left {
    display: flex;
    &-info {
      padding-left: 3px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      &-name {
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #000000;
        text-align: left;
      }
      &-number {
        padding-top: 3px;
        font-family: PingFangSC-Regular;
        font-size: 11px;
        color: #787878;
        text-align: left;
      }
      &-price {
        font-family: PingFangSC-Regular;
        font-size: 18px;
        color: #FF1800;
        text-align: left;
      }
    }
  }
}

.cart {
  position: absolute;
  right: 10px;
  bottom: 0;
}
```


复制完成后，在控制台中输入 yarn dev即可启动该项目。


-Cloud Studio 内置预览插件，可以实时显示网页应用，当代码发生改变之后，预览窗口会自动刷新，即可在 Cloud Studio 内实时开发调试网页了
-因为本项目是移动端H5的项目，所以需要打开“toggle device”按钮查看样式。
-提供了二唯码在手机端进行调试。


![](https://help-assets-1257242599.cos.ap-shanghai.myqcloud.com/enterprise/2023/5/5-10.png)


# 3️⃣发布仓库


填写README.md文件后，左边功能菜单区找到“源代码管理”，使用 git init 进行仓库初始化，输入需要提交的message信息，再点击"Commit"进行仓库提交即可。


![](https://help-assets-1257242599.cos.ap-shanghai.myqcloud.com/enterprise/2023/5/5-11.png)


可以登陆到 [Coding 平台](https://idestiny.coding.net/login?from_column=20420&from=20420) 进行查看仓库代码：


![](https://help-assets-1257242599.cos.ap-shanghai.myqcloud.com/enterprise/2023/5/5-12.png)


# 4️⃣总结


今天我们模拟了在一台新的机器设备上，从 0 到 1 体验Cloud Studio云 IDE 给我们带来的优势，不需要装各种环境，简单易用，开箱即可上手。

也欢迎大家一起探索 Cloud Studio 更多的功能，为工作中进行赋能！


![](https://help-assets-1257242599.cos.ap-shanghai.myqcloud.com/enterprise/2023/5/5-13.png)



