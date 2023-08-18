---
title: '【腾讯云 Cloud Studio 实战训练营】这一次，我尽能如此快速地进入编程状态'
subTitle: '使用Cloud Studio完成贪吃蛇web游戏应用'
summary: '创建一个贪吃蛇 Web 游戏应用的时候，发现 Cloud Studio 尽能如此快速地帮我实现项目应用的预览，丝毫没有顿挫感'
tags: ['用户体验']
date: '2023-07-22'
author: '前端修罗场'
description: Cloud Studio 是腾讯云自主研发的在线 IDE 集成开发环境。用户可以通过 Cloud Studio 创建项目的工作空间，进行在线编程、开发、调试等操作。Cloud Studio 还提供可分享的在线 IDE 开发环境功能。本文描述如何通过Cloud Studio&Flutter完成跨平台博客的搭建
keywords: 在线编程,WebIDE,CloudIDE,云端IDE,在线IDE,云端开发工具,在线集成开发环境,开发环境分享,代码托管,在线开发,在线调试,软件团队协作,CODING,Cloud Studio,Web IDE,Flutter,apk,流水线
---

当今的云计算技术已经越来越成熟，基于云计算技术进行云端开发已经成为最新趋势。而Cloud Studio是一个基于云计算的 Web 端开发微服务平台，提供了代码编辑器、调试器、代码库，以及自动构建和部署工具等各种功能，帮助开发者在云端开发应用程序。

虽然我很早就接触了云端 IDE，可是能让我感到不一样的应该要属这一次！

在众多 IDE 中， Cloud Studio 绝对是你可以选择的一款。因为选择一款云端 IDE 不仅仅要看它的用户体验，还要看它能提供的资源。 Cloud Studio 背靠腾讯云，拥有丰富的云端资源可供开发者调用，这就等于你开了一家五金店，你在装修自家房子的时候，可以及时地拿到想要的工具。

而这一次为什么让我体验到了跨越时空的感觉呢？因为我在尝试创建一个贪吃蛇 Web 游戏应用的时候，发现 Cloud Studio 尽能如此快速地帮我实现项目应用的预览，丝毫没有顿挫感。那么，现在我就来分享一下我是如何快速地创建这块贪吃蛇游戏的。

# 开始体验

首先，创建你的账号。

由于 CODING 和 Cloud Studio 实现了账号互通，如果你有 CODING 的账号，你可以用 CODING 账号登录，完成账号授权。除此之外，你还可以通过 微信 或者 GitHub 进行登录

![](https://help-assets-1257242599.cos.ap-shanghai.myqcloud.com/enterprise/2023/6/6-1.png)


登录之后，你会在 Cloud Studio 左侧的导航栏中看到 “*应用推荐*”这么一个菜单，点击这个菜单，会出现很多应用，可供你 fork。


![](https://help-assets-1257242599.cos.ap-shanghai.myqcloud.com/enterprise/2023/6/6-2.png)


比如，这次我想体验一下在 Cloud Studio 中开发游戏应用是什么体验，我就选择了 "JavaScript Snake Game" 这个项目，这个项目是一个贪吃蛇应用。点击这个应用，你会进入到应用详情页面。


![](https://help-assets-1257242599.cos.ap-shanghai.myqcloud.com/enterprise/2023/6/6-3.png)


从应用简介上可知道，这是一个基于 DOM 的贪吃蛇游戏，是十多年前用 JavaScript 编写的。


# 开始编程


接着，我们点击 fork 按钮，Cloud Studio 便会帮我们自动进行 fork ，并生成一个工作空间。


![](https://help-assets-1257242599.cos.ap-shanghai.myqcloud.com/enterprise/2023/6/6-4.png)


如果你是一个前端开发者，这个画面是不是很熟悉。是的，这是一个 VSCode 的编辑器界面。那么，这对于一个以使用 VSCode 作为日常开发主要编辑器的开发者来说，可以说是零门槛。

我们首先预览一下这个应用的效果。你可以点击“右上角”的显示预览按钮进行预览：


![](https://help-assets-1257242599.cos.ap-shanghai.myqcloud.com/enterprise/2023/6/6-5.png)


接着就会在编辑器的右侧显示出实时的预览画面：


![](https://help-assets-1257242599.cos.ap-shanghai.myqcloud.com/enterprise/2023/6/6-6.png)


这个效果已经是这个项目做好了的。现在，我们要开始自己动手，尝试着改一改这个应用。

通过分析 index.html 的代码，我发现，要初始化贪吃蛇这个游戏，需要通过下方这段代码进行初始化，便可以初始化到网页的 div 中：


```shell
​
var mySnakeBoard = new SNAKE.Board({
  boardContainer: "game-area",
  fullScreen: true,
  premoveOnPause: false
});
```


在 index.html 的代码中，是通过引入 init.js 这个文件来实现的。

接下来，还要引入 snake.js 这个文件，这个文件是贪吃蛇逻辑的主要实现。在玩这个游戏的时候，我发现贪吃蛇第一次吃的时候，后面的方块长的有点多了，第一次就涨了 5 个：


![](https://help-assets-1257242599.cos.ap-shanghai.myqcloud.com/enterprise/2023/6/6-7.png)


我想把它改少一点，第一次吃的不要那么多。于是，根据 snake.js 的代码分析，我发现这段代码 me.eatFood 是用于控制吃到食物的时候的逻辑：


![](https://help-assets-1257242599.cos.ap-shanghai.myqcloud.com/enterprise/2023/6/6-8.png)



我们可以看到，当吃到食物的时候，会调用 createBlocks 这个函数，通过传递需要创建的 Block 数量来增加贪吃蛇的长度。其中，growthIncr 这个变量便是控制增加数量的。现在，我们把这个变量的初始值从 5 改成 2，便可以实现我们的需求：


![](https://help-assets-1257242599.cos.ap-shanghai.myqcloud.com/enterprise/2023/6/6-9.png)


现在，再来玩一次贪吃蛇，你会发现，确实实现了：


![](https://help-assets-1257242599.cos.ap-shanghai.myqcloud.com/enterprise/2023/6/6-10.png)


通过这么一系列操作下列，我感觉似乎和我在日常开发中使用 vsCode 自己开发，轻便快捷多了。省去了我很多新建文件、配置信息等等的步骤。最后来总结一下使用体验吧。


# 总结


使用 Cloud Studio 这个在线 IDE 的感受非常好，它的优点非常丰富，我也总结了一些我认为值得赞赏的地方：

-基于Web，极大地方便了开发者在任何地方、任何设备上进行代码编写，而且不需要安装任何软件。


-Cloud Studio 的界面设计得很简洁、直观，使得初学者也可以轻松上手，且不影响开发者的效率。


-支持多种编程语言，如 Java、Python、JavaScript 等，以及一些常见的框架，如 Node.js、Spring Boot 等，这样就可以满足各种开发需求。


-可以与 GitHub 等代码托管平台进行无缝集成，从而方便提交代码和代码的版本控制。


-Cloud Studio 还提供了很多强大的开发工具，如代码自动补全、调试、断点等功能，可以大大提高开发效率。


-自动构建和部署，Cloud Studio提供了自动化的构建和部署工具，可以将代码部署到云端或者其他地方进行测试和生产使用。


-虽然 Cloud Studio 表现优异，但也存在一些缺点：

由于它是基于 Web 的，因此在网络不稳定或速度较慢的情况下，可能会影响开发者的使用体验。

部分高级开发需求可能不太适用，因为它提供的功能不够复杂，需要配合其他开发工具使用。


但是，相较于其他 IDE，Cloud Studio 的优点在于它的轻便、易用、可扩展、云端存储等。但也有一些不同，例如它不能离线运行，并且可能会受到网络延迟的影响。总的来说，Cloud Studio 是一款非常方便的在线 IDE，可以让我们在任何地方方便地进行开发。



