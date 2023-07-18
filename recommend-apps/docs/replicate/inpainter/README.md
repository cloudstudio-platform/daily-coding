---
name: Inpainter
description: 用于使用 Replicate API 通过稳定扩散进行修复的 Web GUI。
author:
  name: zeke
  avatar: https://avatars.githubusercontent.com/u/2289?s=64&v=4
contributors:
  - name: zeke
    avatar: https://avatars.githubusercontent.com/u/2289?s=64&v=4
  - name: bfirsh
    avatar: https://avatars.githubusercontent.com/u/40906?s=64&v=4
  - name: ParentZap
    avatar: https://avatars.githubusercontent.com/u/63628065?s=64&v=4
language:
  - language: Javascript
    percentage: 97.2
  - language: CSS
    percentage: 2.8
star: '257'
fork: '56'
url: https://github.com/replicate/inpainter
banner: ./inpainter-banner.png
icon: https://cs-res.codehub.cn/vscode/node.svg
video: ./Inpainter.mov
license: MIT
order: 7
---

# 🎨 Inpainter

&nbsp; &nbsp;用于使用 Replicate API通过[Stable Diffusion](https://replicate.com/stability-ai/stable-diffusion)进行修复的 Web GUI 。

&nbsp; &nbsp;在[inpainter.vercel.app](https://inpainter.vercel.app/)上尝试一下

https://user-images.githubusercontent.com/2289/188992670-3dc9db47-fb8e-45c1-85ee-afc850009c48.mp4

## 如何运行的

🐢🚀 这是一个 Node.js 应用程序！它的动力来自：

- [Replicate](https://replicate.com/), 一个在云中运行机器学习模型的平台。
- [Stable Diffusion](https://replicate.com/stability-ai/stable-diffusion), 一种开源文本到图像生成模型。
- 用于与 Replicate API 对话的Next.js [server-side API routes](pages/api) 
- Next.js 用于修复 GUI 的 React 组件
- [Tailwind CSS](https://tailwindcss.com/) 样式
- [Lucide](https://lucide.dev/)图标

## 发展

&nbsp; &nbsp;先决条件：


1. Node.js 的最新版本
2. [复制 API 令牌](https://replicate.com/account)


&nbsp; &nbsp;在您的环境中设置复制 API 令牌：
```
REPLICATE_API_TOKEN=<your-token-here>
```

&nbsp; &nbsp;然后安装依赖项并运行服务器：
```sh
npm install
npm run dev
```

&nbsp; &nbsp;打开[http://localhost:3000](http://localhost:3000)

