---
name: JavaScript Snake Game
description: >-
    这是一个基于DOM的贪吃蛇游戏，是十多年前用JavaScript编写的，它被设计的有一种复古的风格。
author:
  name: patorjk
  avatar: https://avatars.githubusercontent.com/u/521224?s=64&v=4
contributors: 
  - name: patorjk
    avatar: https://avatars.githubusercontent.com/u/521224?s=64&v=4
  - name: yasharels
    avatar: https://avatars.githubusercontent.com/u/15703836?s=64&v=4
  - name: Rb64
    avatar: https://avatars.githubusercontent.com/u/91498309?s=64&v=4
  - name: legoman8304
    avatar: https://avatars.githubusercontent.com/u/43346988?s=64&v=4
  - name: dginovker
    avatar: https://avatars.githubusercontent.com/u/32943174?s=64&v=4
  - name: mamamia5x
    avatar: https://avatars.githubusercontent.com/u/57536929?s=64&v=4
  - name: ashishsiot
    avatar: https://avatars.githubusercontent.com/u/63919950?s=64&v=4
  - name: Coteh
    avatar: https://avatars.githubusercontent.com/u/3276350?s=64&v=4
  - name: yokesharun
    avatar: https://avatars.githubusercontent.com/u/12830078?s=64&v=4
  - name: Furtano
    avatar: https://avatars.githubusercontent.com/u/4115133?s=64&v=4
  - name: Thunderforge
    avatar: https://avatars.githubusercontent.com/u/6200170?s=64&v=4
language:
  - language: Javascript
    percentage: 62.7
  - language: CSS
    percentage: 30.4
  - language: HTML
    percentage: 6.9
star: '478'
fork: '601'
url: https://github.com/cloudstudio-platform/JavaScript-Snake
banner: './image.png'
icon: https://cs-res.codehub.cn/vscode/node.svg
video: ./snake-game.mov
license: MIT
order: 3
---

# JavaScript Snake Game

这是一个基于DOM的贪吃蛇游戏，是我十多年前用JavaScript编写的，它被设计的有一种复古的风格。
## 在线玩游戏!

原版游戏在这里:

http://patorjk.com/games/snake


## 如何使用
 index.html 文件应该给出怎么使用此代码的用法，但是您可以在下面看到将其初始化到网页内的任何div中.
 
    var mySnakeBoard = new SNAKE.Board( {
                                            boardContainer: "game-area",
                                            fullScreen: false,
                                            width: 580,
                                            height:400
                                        });
                                    
源代码中的注释格式有点奇怪，因为我当时正在使用YUI Doc，它可以从代码生成文档。JavaScript世界里有如此多混乱的东西，这有点糟糕。但我很高兴其余的代码没有使用任何外部库，因为这个游戏在十多年后仍然可以正常工作。
