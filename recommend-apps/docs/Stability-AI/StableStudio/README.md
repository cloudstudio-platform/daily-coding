---
name: StableStudio
description: >-
  StableStudio 是 Stability AI 的 DreamStudio 的官方开源变体，DreamStudio 是我们用于生成 AI 的用户界面。它是一个基于网络的应用程序，允许用户创建和编辑生成的图像。我们还不完全确定这个项目的进展情况，但我们很高兴看到社区用它做什么！
author:
  name: Stability AI
  avatar: https://avatars.githubusercontent.com/u/100950301?s=88&v=4
contributors:
  - name: cruhl
    avatar: https://avatars.githubusercontent.com/u/4983357?v=4
language:
  - language: TypeScript
    percentage: 99.6
star: 1.4k
fork: '80'
url: https://github.com/Stability-AI/StableStudio
banner: ./misc/Banner.png
icon: https://cs-res.codehub.cn/vscode/node.svg
video: ./misc/StableStudio.mov
license: MIT
order: 0
---

<div align="center">

![StableStudio](./misc/Banner.png)

# StableStudio by [Stability AI](https://stability.ai/)

**👋 欢迎来到[DreamStudio](https://www.dreamstudio.ai)的开源版本 StableStudio 的社区存储库**

**🗺 内容 – [🚀 快速入门](#quick-start) · [ℹ️ 关于](#about) · [🙋 FAQ](#faq) · [🧑‍💻 贡献](#contributing)**

**📚 文档 – [🎨 用户界面](./packages/stablestudio-ui/README.md) · [🔌 插件](./packages/stablestudio-plugin/README.md) · <a href="https://platform.stability.ai" target="_blank">⚡️ 平台.稳定性.ai</a>**

**🔗 链接 – <a href="https://discord.com/channels/1002292111942635562/1108055793674227782" target="_blank">🎮 Discord</a> · <a href="https://dreamstudio.ai" target="_blank">🌈 DreamStudio</a> · <a href="https://github.com/Stability-AI/StableStudio/issues">🛟 Bugs & 支持</a> · <a href="https://github.com/Stability-AI/StableStudio/discussions">💬 讨论</a>**

</div>

<div align="center" style="display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 1em; margin: 4em 0;">
  <img src="./misc/GenerateScreenshot.png" style="width: 400px; max-width: 600px; flex-grow: 1;" />
  <img src="./misc/EditScreenshot.png" style="width: 400px; max-width: 600px; flex-grow: 1;" />
</div>

# <a id="quick-start" href="#quick-start">🚀 快速开始</a>

&nbsp; &nbsp;您需要安装 [Node.js](https://nodejs.org/en/) 和 [Yarn](https://yarnpkg.com/) 

&nbsp; &nbsp;完成后，您可以运行以下命令...

```bash
git clone https://github.com/Stability-AI/StableStudio.git

cd StableStudio

yarn

yarn dev
```

_**就是这样 🎉**_

&nbsp; &nbsp;默认情况下 StableStudio 将在[localhost:3000](http://localhost:3000) 上运行

&nbsp; &nbsp;您需要准备好[API key](https://platform.stability.ai/docs/getting-started/authentication) 才是使用默认的 [Stability API](https://platform.stability.ai/docs/getting-started) 插件

&nbsp; &nbsp;如果您没有,您可以在[DreamStudio](https://dreamstudio.ai)上创建一个账户,并从[account page](https://dreamstudio.ai/account)获取密钥

# <a id="about" href="#about">ℹ️ 关于</a>

<div style="display: flex; justify-content: center; align-items: center; gap: 1em; margin: 0 0 2em 0;">
  <img src="./misc/PainterWithRobot.png" style="flex-grow: 1; flex-shrink: 1;" />
</div>

&nbsp; &nbsp;StableStudio 是 [Stability AI](https://stability.ai)的 DreamStudio 的官方开源变体, [DreamStudio](https://www.dreamstudio.ai)是我们用于生成AI的用户界面.
它是一个基于网络的应用程序，允许用户创建和编辑生成的图像。

&nbsp; &nbsp;我们还不完全确定这个项目的进展情况，但我们很高兴看到社区用它做什么！

# <a id="faq" href="#faq">🙋 FAQ</a>

## StableStudio 和 [DreamStudio](https://dreamstudio.ai) 有什么区别?

&nbsp; &nbsp;不多！为了使该项目对社区更加友好，我们做了一些调整：

-我们删除了[DreamStudio](https://dreamstudio.ai)特定的品牌

-所有“在线”API 调用均已被[插件系统](./packages/stablestudio-plugin/README.md)取代,该系统允许您轻松更换后段

  - 在发布时，我们只会为 Stability API 提供一个插件，但使用一点 TypeScript，您就可以[创建自己的](./packages/stablestudio-plugin/README.md).

- 我们删除了特定于稳定性的帐户功能，例如计费、API 密钥管理等。

  - 这些功能仍然可以在[DreamStudio's account page](https://dreamstudio.ai/account)上使用

## [DreamStudio](https://dreamstudio.ai) 还会支持吗?

_是的！Stability 的 StableStudio 托管部署仍将是[DreamStudio](https://dreamstudio.ai).

&nbsp; &nbsp;它将继续获取更新，并尽可能与 StableStudio 保持同步。

# <a id="contributing" href="#contributing">🧑‍💻 贡献</a>

<div style="display: flex; justify-content: center; align-items: center; gap: 1em; margin: 0 0 2em 0;">
  <img src="./misc/ProgrammingRobots.png" style="flex-grow: 1; flex-shrink: 1;" />
</div>

_**鼓励社区贡献!**_

_**UI包的[README](./packages/stablestudio-ui/README.md)是一个很好的开始**_

&nbsp; &nbsp;错误修复、文档、常规清理、新功能等都是受欢迎的。

&nbsp; &nbsp;这里有一些有用的链接...
- [讨论](https://github.com/Stability-AI/StableStudio/discussions)
- [开放式问题](https://github.com/Stability-AI/StableStudio/issues)
- [打开拉去请求](https://github.com/Stability-AI/StableStudio/pulls)
- [行为准则](./CODE_OF_CONDUCT.md)

