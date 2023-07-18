---
name: Dify
description: >-
  Dify 是一个易于使用的 LLMOps 平台，旨在帮助更多人创建可持续的 AI 原生应用程序。通过针对各种应用程序类型的可视化编排，Dify 提供开箱即用的即用型应用程序，这些应用程序也可以用作后端即服务 API。使用一个用于插件和数据集集成的 API 来统一您的开发流程，并使用单一界面简化您的操作，以实现快速工程、可视化分析和持续改进。
author:
  name: LangGenius
  avatar: https://avatars.githubusercontent.com/u/127165244?s=88&v=4
contributors:
  - name: takatost
    avatar: https://avatars.githubusercontent.com/u/5485478?s=64&v=4
  - name: goocarlos
    avatar: https://avatars.githubusercontent.com/u/892886?s=64&v=4
  - name: iamjoel
    avatar: https://avatars.githubusercontent.com/u/2120155?s=64&v=4
  - name: Panmuse
    avatar: https://avatars.githubusercontent.com/u/4189790?s=64&v=4
  - name: crazywoola
    avatar: https://avatars.githubusercontent.com/u/100913391?s=64&v=4
  - name: killpanda
    avatar: https://avatars.githubusercontent.com/u/217538?s=64&v=4
  - name: zxhlyh
    avatar: https://avatars.githubusercontent.com/u/16177003?s=64&v=4
  - name: GarfieldLucy
    avatar: https://avatars.githubusercontent.com/u/10388720?s=64&v=4
  - name: eltociear
    avatar: https://avatars.githubusercontent.com/u/22633385?s=64&v=4
  - name: yuhao1118
    avatar: https://avatars.githubusercontent.com/u/26663836?s=64&v=4
  - name: ares0x
    avatar: https://avatars.githubusercontent.com/u/53114112?s=64&v=4
language:
  - language: TypeScript
    percentage: 51
  - language: Python
    percentage: 42.9
  - language: CSS
    percentage: 3.3
  - language: SCSS
    percentage: 1.2
  - language: JavaScript
    percentage: 1.1
  - language: PHP
    percentage: 0.2
star: 3k
fork: '396'
url: https://github.com/langgenius/dify
banner: ./describe-en.png
icon: https://cs-res.codehub.cn/vscode/node.svg
license: MIT
order: 15
---

![](./images/describe-en.png)
<p align="center">
  <a href="./README.md">English</a> |
  <a href="./README_CN.md">简体中文</a> |
  <a href="./README_JA.md">日本語</a>
</p>

[Website](https://dify.ai) • [Docs](https://docs.dify.ai) • [Twitter](https://twitter.com/dify_ai) • [Discord](https://discord.gg/FngNHpbcY7)

**Dify** 是一个易于使用的 LLMOps 平台，旨在帮助更多人创建可持续的 AI 原生应用程序。通过针对各种应用程序类型的可视化编排，Dify 提供开箱即用的即用型应用程序，这些应用程序也可以用作后端即服务 API。使用一个用于插件和数据集集成的 API 来统一您的开发流程，并使用单一界面简化您的操作，以实现快速工程、可视化分析和持续改进。

&nbsp; &nbsp;使用 Dify 创建的应用程序包括：

&nbsp; &nbsp;支持表单模式和聊天对话模式的开箱即用网站 包含插件功能、上下文增强等的单一 API，节省您后端编码工作 可视化数据分析、日志审查和应用程序注释 Dify 与 Langchain 兼容，这意味着我们将逐步支持多个 LLM，目前支持：


- GPT 3 (text-davinci-003)
- GPT 3.5 Turbo(ChatGPT)
- GPT-4

## 使用云服务

&nbsp; &nbsp;访问[Dify.ai](https://dify.ai)

## 安装社区版

### 系统要求

&nbsp; &nbsp;在安装 Dify 之前，请确保您的计算机满足以下最低系统要求：

- CPU >= 1 Core
- 内存 >= 4GB

### 快速开始

&nbsp; &nbsp;启动 Dify 服务器的最简单方法是运行我们的[docker-compose.yml](docker/docker-compose.yaml) 文件 在运行安装命令之前，请确保您的计算机上已安装[Docker](https://docs.docker.com/get-docker/) 和 [Docker Compose](https://docs.docker.com/compose/install/) :

```bash
cd docker
docker-compose up -d
```

&nbsp; &nbsp;运行后，您可以在浏览器中通过[http://localhost/install](http://localhost/install) 访问Dify仪表板并开始初始化安装过程。


### 配置

&nbsp; &nbsp;如果您需要自定义配置，请参考我们的[docker-compose.yml](docker/docker-compose.yaml)文件中的注释并手动设置环境配置。进行更改后，请再次运行'docker-compose up -d' 

## 路线图

&nbsp; &nbsp;正在开发的功能：

- **数据集**,支持更多的数据集，例如同步Notion或网页的内容我们将支持更多的数据集，包括文本、网页，甚至Notion内容。用户可以根据自己的数据源构建AI应用。
- **插件**, 为应用程序引入 ChatGPT Plugin 标准的插件，或者使用 Dify 生产的插件 我们将发布符合 ChatGPT 标准的插件，或者 Dify 自己的插件，以在应用程序中启用更多功能。
- **开源模型**, 例如采用Llama作为模型提供者或进一步微调我们将与Llama这样的优秀开源模型合作，将它们作为我们平台中的模型选项提供，或使用它们进行进一步微调。

## 问答

**问：我可以用 Dify 做什么？**

&nbsp; &nbsp;答：Dify 是一款简单但功能强大的 LLM 开发和运营工具。您可以使用它来构建商业级应用程序、个人助理。如果您想开发自己的应用程序，LangDifyGenius可以为您节省与OpenAI集成的后端工作，并提供可视化操作功能，让您不断改进和训练您的GPT模型。

**问：如何使用 Dify 来“训练”我自己的模型？**

&nbsp; &nbsp;答：一个有价值的应用程序包括即时工程、上下文增强和微调。我们创建了一种将提示与编程语言（类似于模板引擎）相结合的混合编程方法，可以轻松完成长文本嵌入或从用户输入的 Youtube 视频中捕获字幕 - 所有这些都将作为上下文提交待处理的法学硕士。我们非常注重应用的可操作性，用户在使用App过程中产生的数据可用于分析、标注和持续训练。如果没有合适的工具，这些步骤可能会非常耗时。

**问：如果我想创建自己的应用程序，我需要准备什么？**

&nbsp; &nbsp;答：我们假设您已经拥有 OpenAI API 密钥；如果没有，请注册一个。如果您已经有一些可以作为培训背景的内容，那就太好了！

**问：有哪些界面语言可用？**

&nbsp; &nbsp;答：目前支持英文和中文，您可以向我们贡献语言包。

## Star 历史

[![Star History Chart](https://api.star-history.com/svg?repos=langgenius/dify&type=Date)](https://star-history.com/#langgenius/dify&Date)

## 联系我们

&nbsp; &nbsp;如果您有任何疑问、建议或合作咨询，请随时通过以下渠道与我们联系：

- 在我们的 GitHub 存储库上提交问题或 PR
- 加入我们的[Discord](https://discord.gg/FngNHpbcY7)社区中的讨论
- 发送电子邮件至 hello@dify.ai

&nbsp; &nbsp;我们渴望帮助您，共同创建更多有趣、有用的人工智能应用！

## 贡献

&nbsp; &nbsp;为了确保正确的审查，所有代码贡献 - 包括来自具有直接提交访问权限的贡献者的代码 - 必须通过拉取请求提交并在合并之前得到核心开发团队的批准。


&nbsp; &nbsp;我们欢迎所有拉取请求！如果您想提供帮助，请查看[贡献指南](CONTRIBUTING.md)以获取有关如何开始的更多信息。

## 安全

&nbsp; &nbsp;为了保护您的隐私，请避免在 GitHub 上发布安全问题。相反，请将您的问题发送至 security@dify,我们将为您提供更详细的答案。

## 引文

&nbsp; &nbsp;本软件使用以下开源软件：

- Chase, H. (2022). LangChain [Computer software]. https://github.com/hwchase17/langchain
- Liu, J. (2022). LlamaIndex [Computer software]. doi: 10.5281/zenodo.1234.

&nbsp; &nbsp;欲了解更多信息，请参阅相应软件的官方网站或许可文本。

## 许可

&nbsp; &nbsp;该存储库可在 [Dify Open Source License](LICENSE) 下使用
