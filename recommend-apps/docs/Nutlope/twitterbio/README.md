---
name: TwitterBio
description: 该项目使用 AI 为您生成 Twitter 简介。
author:
  name: Nutlope
  avatar: https://avatars.githubusercontent.com/u/63742054?s=64&v=4
contributors:
  - name: Nutlope
    avatar: https://avatars.githubusercontent.com/u/63742054?s=64&v=4
  - name: smaeda-ks
    avatar: https://avatars.githubusercontent.com/u/11495867?s=64&v=4
  - name: chuanyu0201
    avatar: https://avatars.githubusercontent.com/u/26568752?s=64&v=4
  - name: steven-tey
    avatar: https://avatars.githubusercontent.com/u/28986134?s=64&v=4
  - name: tedspare
    avatar: https://avatars.githubusercontent.com/u/36117635?s=64&v=4
language:
  - language: TypeScript
    percentage: 91.1
  - language: CSS
    percentage: 5.0
  - language: JavaScript
    percentage: 3.9
star: 1.2k
fork: '351'
url: https://github.com/cloudstudio-platform/twitterbio
banner: ./public/screenshot.png
icon: https://cs-res.codehub.cn/vscode/node.svg
video: ./public/TwitterBio.mov
license: ''
order: 2
---

# [twitterbio.io](https://www.twitterbio.io/)

&nbsp; &nbsp;该项目使用 AI 为您生成 Twitter 简介。

[![Twitter Bio Generator](./public/screenshot.png)](https://www.twitterbio.io)

## 如何运行

&nbsp; &nbsp;该项目使用 [ChatGPT API](https://openai.com/api/)和 [Vercel Edge 功能](https://vercel.com/features/edge-functions) 它根据表单和用户输入构建提示，通过 Vercel Edge 函数将其&nbsp; &nbsp;发送到 chatGPT API，然后将响应流式传输回应用程序。

&nbsp; &nbsp;如果您想了解我是如何构建它的，请查看 [视频](https://youtu.be/JcE-1xzQTE0) or [博客文章](https://vercel.com/blog/gpt-3-app-next-js-vercel-edge-functions).

## 本地运行

&nbsp; &nbsp;克隆存储库后，前往[OpenAI](https://beta.openai.com/account/api-keys) 创建一个帐户，并&nbsp; &nbsp;将您的 API 密钥放入名为`.env`.

&nbsp; &nbsp;然后，在命令行中运行该应用程序，它将在`http://localhost:3000`.处可用
```bash
npm i
```

```bash
npm run dev
```

## 一键部署

&nbsp; &nbsp; [使用Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=vercel-examples)部署示例:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Nutlope/twitterbio&env=OPENAI_API_KEY&project-name=twitter-bio-generator&repo-name=twitterbio)
