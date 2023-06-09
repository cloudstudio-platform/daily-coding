---
name: Paint by Text
description: Modify images by chatting with a generative AI model.
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

# 👩‍🎨 Paint by Text

Modify images by chatting with a generative AI model.

Try it out at [paintbytext.chat](http://paintbytext.chat)

## How it works

This app is powered by:

🚀 [Replicate](https://replicate.com/?utm_source=project&utm_campaign=paintbytext), a platform for running machine learning models in the cloud.

🎨 [InstructPix2Pix](https://replicate.com/timothybrooks/instruct-pix2pix?utm_source=project&utm_campaign=paintbytext), an open-source machine learning model that generates images from text.

▲ [Vercel](https://vercel.com/), a platform for running web apps.

⚡️ Next.js [server-side API routes](pages/api), for talking to the Replicate API.

👀 Next.js React components, for the browser UI.

🍃 [Tailwind CSS](https://tailwindcss.com/), for styles.


## Development

1. Install a recent version of [Node.js](https://nodejs.org/)
1. Copy your [Replicate API token](https://replicate.com/account?utm_source=project&utm_campaign=paintbytext) and set it in your environment:
    ```
    echo "REPLICATE_API_TOKEN=<your-token-here>" > .env.local
    ````
1. Install dependencies and run the server:
    ```
    npm install
    npm run dev
    ```
1. Open [localhost:3000](http://localhost:3000) in your browser. That's it!
