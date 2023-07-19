---
name: ChatGPT Next Web
description: >-
  One-Click to deploy well-designed ChatGPT web UI on Vercel. 一键拥有你自己的 ChatGPT
  网页服务。
author:
  name: Yidadaa
  avatar: https://avatars.githubusercontent.com/u/16968934?s=88&v=4
contributors:
  - name: Yidadaa
    avatar: https://avatars.githubusercontent.com/u/16968934?s=64&v=4
  - name: actions-user
    avatar: https://avatars.githubusercontent.com/u/65916846?s=64&v=4
  - name: leedom92
    avatar: https://avatars.githubusercontent.com/u/30711792?s=64&v=4
  - name: AprilNEA
    avatar: https://avatars.githubusercontent.com/u/37977109?s=64&v=4
  - name: Gan-Xing
    avatar: https://avatars.githubusercontent.com/u/41600413?s=64&v=4
  - name: yanCode
    avatar: https://avatars.githubusercontent.com/u/2328124?s=64&v=4
  - name: yorunning
    avatar: https://avatars.githubusercontent.com/u/25226871?s=64&v=4
  - name: PaRaD1SE98
    avatar: https://avatars.githubusercontent.com/u/78383353?s=64&v=4
  - name: tscherrie
    avatar: https://avatars.githubusercontent.com/u/8957307?s=64&v=4
  - name: RugerMcCarthy
    avatar: https://avatars.githubusercontent.com/u/30253468?s=64&v=4
  - name: pBrambi
    avatar: https://avatars.githubusercontent.com/u/51099204?s=64&v=4
language:
  - language: Javascript
    percentage: 81.5
  - language: scss
    percentage: 16.5
star: 26.8k
fork: 23.2k
url: https://github.com/Yidadaa/ChatGPT-Next-Web
banner: ./docs/images/cover.png
icon: https://cs-res.codehub.cn/vscode/node.svg
video: ./docs/images/ChatGPT-Next-Web.mov
license: Anti 996
order: 11
---

<div align="center">
<img src="./docs/images/icon.svg" alt="icon"/>

<h1 align="center">ChatGPT Next Web</h1>

English / [简体中文](./README_CN.md)

One-Click to deploy well-designed ChatGPT web UI on Vercel.

一键免费部署你的私人 ChatGPT 网页应用。

[Demo](https://chatgpt.nextweb.fun/) / [Issues](https://github.com/Yidadaa/ChatGPT-Next-Web/issues) / [Buy Me a Coffee](https://www.buymeacoffee.com/yidadaa)

[演示](https://chatgpt.nextweb.fun/) / [反馈](https://github.com/Yidadaa/ChatGPT-Next-Web/issues) / [QQ 群](https://github.com/Yidadaa/ChatGPT-Next-Web/assets/16968934/3ff423d5-5703-4772-8b6d-abec7eec3a4b) / [QQ 频道](https://github.com/Yidadaa/ChatGPT-Next-Web/assets/16968934/debfbee7-e682-4814-a601-f4403dac6d1d) / [打赏开发者](https://user-images.githubusercontent.com/16968934/227772541-5bcd52d8-61b7-488c-a203-0330d8006e2b.jpg)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FYidadaa%2FChatGPT-Next-Web&env=OPENAI_API_KEY&env=CODE&project-name=chatgpt-next-web&repository-name=ChatGPT-Next-Web)

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/Yidadaa/ChatGPT-Next-Web)

![cover](./docs/images/cover.png)

</div>

## Features

- **Deploy for free with one-click** on Vercel in under 1 minute
- Privacy first, all data stored locally in the browser
- Markdown support: LaTex, mermaid, code highlight, etc.
- Responsive design, dark mode and PWA
- Fast first screen loading speed (~100kb), support streaming response
- New in v2: create, share and debug your chat tools with prompt templates (mask)
- Awesome prompts powered by [awesome-chatgpt-prompts-zh](https://github.com/PlexPt/awesome-chatgpt-prompts-zh) and [awesome-chatgpt-prompts](https://github.com/f/awesome-chatgpt-prompts)
- Automatically compresses chat history to support long conversations while also saving your tokens
- I18n: English, 简体中文, 繁体中文, 日本語, Français, Español, Italiano, Türkçe, Deutsch, Tiếng Việt, Русский, Čeština, 한국어

## Roadmap

- [x] System Prompt: pin a user defined prompt as system prompt [#138](https://github.com/Yidadaa/ChatGPT-Next-Web/issues/138)
- [x] User Prompt: user can edit and save custom prompts to prompt list
- [x] Prompt Template: create a new chat with pre-defined in-context prompts [#993](https://github.com/Yidadaa/ChatGPT-Next-Web/issues/993)
- [ ] Share as image, share to ShareGPT
- [ ] Desktop App with tauri
- [ ] Self-host Model: support llama, alpaca, ChatGLM, BELLE etc.
- [ ] Plugins: support network search, calculator, any other apis etc. [#165](https://github.com/Yidadaa/ChatGPT-Next-Web/issues/165)

### Not in Plan

- User login, accounts, cloud sync
- UI text customize

## What's New

- 🚀 v2.0 is released, now you can create prompt templates, turn your ideas into reality! Read this: [ChatGPT Prompt Engineering Tips: Zero, One and Few Shot Prompting](https://www.allabtai.com/prompt-engineering-tips-zero-one-and-few-shot-prompting/).

## 主要功能

- 在 1 分钟内使用 Vercel **免费一键部署**
- 完整的 Markdown 支持：LaTex 公式、Mermaid 流程图、代码高亮等等
- 精心设计的 UI，响应式设计，支持深色模式，支持 PWA
- 极快的首屏加载速度（~100kb），支持流式响应
- 隐私安全，所有数据保存在用户浏览器本地
- 预制角色功能（面具），方便地创建、分享和调试你的个性化对话
- 海量的内置 prompt 列表，来自[中文](https://github.com/PlexPt/awesome-chatgpt-prompts-zh)和[英文](https://github.com/f/awesome-chatgpt-prompts)
- 自动压缩上下文聊天记录，在节省 Token 的同时支持超长对话
- 多国语言支持：English, 简体中文, 繁体中文, 日本語, Español, Italiano, Türkçe, Deutsch, Tiếng Việt, Русский, Čeština
- 拥有自己的域名？好上加好，绑定后即可在任何地方**无障碍**快速访问

## 开发计划

- [x] 为每个对话设置系统 Prompt [#138](https://github.com/Yidadaa/ChatGPT-Next-Web/issues/138)
- [x] 允许用户自行编辑内置 Prompt 列表
- [x] 预制角色：使用预制角色快速定制新对话 [#993](https://github.com/Yidadaa/ChatGPT-Next-Web/issues/993)
- [ ] 分享为图片，分享到 ShareGPT
- [ ] 使用 tauri 打包桌面应用
- [ ] 支持自部署的大语言模型
- [ ] 插件机制，支持联网搜索、计算器、调用其他平台 api [#165](https://github.com/Yidadaa/ChatGPT-Next-Web/issues/165)

### 不会开发的功能

- 界面文字自定义
- 用户登录、账号管理、消息云同步

## 最新动态

- 🚀 v2.0 已经发布，现在你可以使用面具功能快速创建预制对话了！ 了解更多： [ChatGPT 提示词高阶技能：零次、一次和少样本提示](https://github.com/Yidadaa/ChatGPT-Next-Web/issues/138)。
- 💡 想要更方便地随时随地使用本项目？可以试下这款桌面插件：https://github.com/mushan0x0/AI0x0.com

## 开始使用

1. 获得 [OpenAI API Key](https://platform.openai.com/account/api-keys);
2. 点击
   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FYidadaa%2FChatGPT-Next-Web&env=OPENAI_API_KEY&env=CODE&project-name=chatgpt-next-web&repository-name=ChatGPT-Next-Web), 记住这 `CODE` 是您的页面密码;
3. 享受 :)

## 常见问题

[简体中文 > 常见问题](./docs/faq-cn.md)

[English > FAQ](./docs/faq-en.md)

## 保持更新

&nbsp; &nbsp;如果您按照上述步骤一键部署了自己的项目，可能会遇到不断出现“Updates available”的问题。这是因为Vercel默认会为您创建一个新项目而不是fork这个项目，从而导致无法正确检测更新。

&nbsp; &nbsp;我们建议您按照以下步骤重新部署：

- 删除原来的仓库；
- 使用页面右上角的fork按钮来fork该项目；
- 再次选择在Vercel中部署,[请看详细教程](./docs/vercel-cn.md).

### 启用自动更新

> 如果遇到Upstream Sync执行失败，请手动同步fork一次。

&nbsp; &nbsp;fork项目后，由于GitHub的限制，您需要在fork项目的Actions页面手动启用Workflows和Upstream Sync Action。启用后，将安排每小时自动更新：

![Automatic Updates](./docs/images/enable-actions.jpg)

![Enable Automatic Updates](./docs/images/enable-actions-sync.jpg)

### 手动更新代码

&nbsp; &nbsp;如果您想立即更新，可以查看[GitHub 文档](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork) ，了解如何将 fork 项目与上游代码同步。


&nbsp; &nbsp;您可以关注该项目或关注作者以及时获取发布通知。

## 访问密码


&nbsp; &nbsp;该项目提供有限的访问控制。请添加在 vercel 环境变量页面上命名的环境变量`CODE`。该值应该是用逗号分隔的密码，如下所示：
```
code1,code2,code3
```

&nbsp; &nbsp;添加或修改此环境变量后，请重新部署项目以使更改生效。

## 环境变量


### `OPENAI_API_KEY` (必要的)

您的 openai api 密钥。

### `CODE` (可选择的)

访问密码，以逗号分隔。

### `BASE_URL` (可选择的)

> Default: `https://api.openai.com`

> Examples: `http://your-openai-proxy.com`

覆盖 openai api 请求基本 url。

### `OPENAI_ORG_ID` (可选择的)

指定 OpenAI 组织 ID。

### `HIDE_USER_API_KEY` (可选择的)

> Default: Empty

如果您不希望用户输入自己的 API 密钥，请将此值设置为 1。

### `DISABLE_GPT4` (可选择的)

> Default: Empty

如果您不希望用户使用 GPT-4，请将此值设置为 1。

## 发展


[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/Yidadaa/ChatGPT-Next-Web)

在开始开发之前，您必须在项目根目录创建一个新 `.env.local` 文件，并将您的 api 密钥放入其中：


```
OPENAI_API_KEY=<your api key here>
```

### 本地发展

```shell
# 1. install nodejs and yarn first
# 2. config local env vars in `.env.local`
# 3. run
yarn install
yarn dev
```

### Docker (推荐)

```shell
docker pull yidadaa/chatgpt-next-web

docker run -d -p 3000:3000 \
   -e OPENAI_API_KEY="sk-xxxx" \
   -e CODE="your-password" \
   yidadaa/chatgpt-next-web
```

您可以在代理后面启动服务：

```shell
docker run -d -p 3000:3000 \
   -e OPENAI_API_KEY="sk-xxxx" \
   -e CODE="your-password" \
   -e PROXY_URL="http://localhost:7890" \
   yidadaa/chatgpt-next-web
```

### Shell

```shell
bash <(curl -s https://raw.githubusercontent.com/Yidadaa/ChatGPT-Next-Web/main/scripts/setup.sh)
```

## 截图

![Settings](./docs/images/settings.png)

![More](./docs/images/more.png)

## 捐赠

[Buy Me a Coffee](https://www.buymeacoffee.com/yidadaa)

## 特别鸣谢

### 赞助

> 仅列出捐赠金额 >= 100RMB 的用户。

[@mushan0x0](https://github.com/mushan0x0)
[@ClarenceDan](https://github.com/ClarenceDan)
[@zhangjia](https://github.com/zhangjia)
[@hoochanlon](https://github.com/hoochanlon)
[@relativequantum](https://github.com/relativequantum)
[@desenmeng](https://github.com/desenmeng)
[@webees](https://github.com/webees)
[@chazzhou](https://github.com/chazzhou)
[@hauy](https://github.com/hauy)
[@Corwin006](https://github.com/Corwin006)
[@yankunsong](https://github.com/yankunsong)
[@ypwhs](https://github.com/ypwhs)
[@fxxxchao](https://github.com/fxxxchao)
[@hotic](https://github.com/hotic)
[@WingCH](https://github.com/WingCH)
[@jtung4](https://github.com/jtung4)
[@micozhu](https://github.com/micozhu)
[@jhansion](https://github.com/jhansion)
[@Sha1rholder](https://github.com/Sha1rholder)
[@AnsonHyq](https://github.com/AnsonHyq)
[@synwith](https://github.com/synwith)

### 贡献
[Contributors](https://github.com/Yidadaa/ChatGPT-Next-Web/graphs/contributors)

## 许可

[Anti 996 License](https://github.com/kattgu7/Anti-996-License/blob/master/LICENSE_CN_EN)

