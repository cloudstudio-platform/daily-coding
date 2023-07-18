---
name: Paint by Text
description: 通过与生成式 AI 模型聊天来修改图像。
author:
  name: replicate
  avatar: https://avatars.githubusercontent.com/u/60410876?s=88&v=4
contributors:
  - name: zeke
    avatar: https://avatars.githubusercontent.com/u/2289?s=64&v=4
  - name: erbridge
    avatar: https://avatars.githubusercontent.com/u/1027364?s=64&v=4
  - name: bfirsh
    avatar: https://avatars.githubusercontent.com/u/40906?s=64&v=4
  - name: mattt
    avatar: https://avatars.githubusercontent.com/u/7659?s=64&v=4
  - name: steven-tey
    avatar: https://avatars.githubusercontent.com/u/28986134?s=64&v=4
language:
  - language: JavaScript
    percentage: 96.1
  - language: CSS
    percentage: 3.5
  - language: Shell
    percentage: 0.4
star: '276'
fork: '46'
url: https://github.com/replicate/paint-by-text
banner: ./215248708-80787623-fff4-4b22-a548-e5c46b055244.png
icon: https://cs-res.codehub.cn/vscode/node.svg
video: ./paint-by-text.mov
license: MIT
order: 6
---

# 👩‍🎨 按文本绘画

&nbsp; &nbsp;通过与生成式 AI 模型聊天来修改图像。

&nbsp; &nbsp;在[paintbytext.chat](http://paintbytext.chat)上尝试一下

## 怎么运行的

&nbsp; &nbsp;该 app 由以下成员提供支持：

🚀 [Replicate](https://replicate.com/?utm_source=project&utm_campaign=paintbytext), 一个在云中运行机器学习模型的平台。

🎨 [InstructPix2Pix](https://replicate.com/timothybrooks/instruct-pix2pix?utm_source=project&utm_campaign=paintbytext), 一种从文本生成图像的开源机器学习模型。

▲ [Vercel](https://vercel.com/), 一个运行网络应用程序的平台。

⚡️ Next.js [server-side API routes](pages/api), 用于与复制 API 对话。
👀 Next.js React components, 用于浏览器 UI。

🍃 [Tailwind CSS](https://tailwindcss.com/), 用于样式。


## Development

1. 安装最新版本的[Node.js](https://nodejs.org/)
1. 复制您的[Replicate API token](https://replicate.com/account?utm_source=project&utm_campaign=paintbytext) 并将其设置在您的环境中：
    ```
    echo "REPLICATE_API_TOKEN=<your-token-here>" > .env.local
    ````
1. 安装依赖项并运行服务器：
    ```
    npm install
    npm run dev
    ```
1. 在浏览器中打开[localhost:3000](http://localhost:3000) 就是这样！
   
