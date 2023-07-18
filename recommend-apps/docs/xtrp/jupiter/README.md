---
name: Jupiter
description: >-
 Jupiter 是一个人工智能，使用蒙特卡罗树搜索 (MCTS) 算法来击败流行的在线游戏 2048。Jupiter 在网络上运行，并且可以在足够数量的模拟下持续获胜（实现 2048 块），这个数字可以可以在网站上轻松更改。
author:
  name: xtrp
  avatar: https://avatars.githubusercontent.com/u/36894883?s=96&v=4
contributors: []
language:
  - language: Javascript
    percentage: 40.3
  - language: CSS
    percentage: 27.8
  - language: HTML
    percentage: 24
  - language: Python
    percentage: 7.9
star: '49'
fork: '3'
url: https://github.com/xtrp/jupiter
banner: ./demo-image.png
icon: https://cs-res.codehub.cn/vscode/node.svg
video: ./2048.mov
license: MIT
order: 10
---

<h1 align="center"><a href="https://jupiter.xtrp.io/">Jupiter</a></h1>
<p align="center"><em>a Monte-Carlo based AI to beat 2048</em></p>

## 描述

&nbsp; &nbsp;Jupiter 是一款使用 [Monte Carlo Tree Search](https://en.wikipedia.org/wiki/Monte_Carlo_tree_search) (MCTS) 算法 击败流行在线游戏[2048](https://play2048.co/)的人工智能。Jupiter 在网络上运行，只要有足够数量的模拟，就可以持续获胜（达到 2048 块），该数字可以在网站上轻松更改。

![Demo Image](demo-image.png)


## 算法

&nbsp; &nbsp;对于每个位置或**游戏状态**,都有一组特定的可能的移动：通常是向左、向右、向上和向下。对于每个可能的移动(称为`N`), 算法会从 `S` 的游戏状态开始创建 (模拟次数) 新游戏 并将 `N` (当前可能的移动）作为每个模拟中的第一个移动。

&nbsp; &nbsp;例如,在 `S = 50` 的情况下,将从特定游戏状态开始进行 200 次模拟，其中 50 次向左下棋作为第一步，50 次向右下棋，50 次向上下棋，50 次向下下棋。在每次模拟中走完第一步后，所有模拟都会进行完全随机的游戏，直到游戏结束。

&nbsp; &nbsp;针对当前游戏状态运行所有模拟后，算法通过对该移动的所有模拟进行平均来计算每个起始移动`S`的平均最终游戏得分。注意：游戏得分是通过将棋盘上所有图块的值相加来计算的。

&nbsp; &nbsp;然后，算法找到模拟平均得分最高的起始动作。这是当前游戏比分中要采取的行动。

&nbsp; &nbsp;例如，如果向上移动的平均最终得分为 1000，向下移动的平均最终得分为 1400，那么一般来说，向下移动比向上移动更好，至少在模拟中是这样。因此，在这种情况下，AI会淡化这一步棋，然后整个过程会重新开始。

&nbsp; &nbsp;模拟的数量可以在 AI 控制台中更改，允许用户通过增加每次移动的模拟数量来提高 AI 性能。然而，随着人工智能性能的提高，人工智能速度会随着执行更多计算而降低。

&nbsp; &nbsp;每次移动的默认模拟次数为 50，在这个数量下，Jupiter 始终能够获得至少 1024 和 512 块，并且很有可能 (~60%) 获得 2048 块。


&nbsp; &nbsp;Jupiter 是用 JavaScript 编写的，可以在网络上运行，这意味着它可以在几乎所有设备和浏览器上无缝运行。

&nbsp; &nbsp;Jupiter还利用了JavaScript[Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)，允许CPU在算法和蒙特卡罗模拟中的工作在多个线程之间平均分配。


## 贡献

&nbsp; &nbsp;如果您想向 Jupiter 添加新功能、使其更快，甚至修复文档中的错误，请随时贡献并[添加拉取请求](https://github.com/xtrp/jupiter/compare)! 我希望有更多的人为 Jupiter 做出贡献。
&nbsp; &nbsp;如果您发现错误，也请随时[提交问题](https://github.com/xtrp/jupiter/issues/new).

## 许可和积分

&nbsp; &nbsp;Jupiter 是由网络开发人员和学生[Gabriel Romualdo](https://xtrp.io/)构建的

&nbsp; &nbsp;Jupiter 根据 MIT 许可证获得许可。请参阅 LICENSE.txt 了解更多信息。
