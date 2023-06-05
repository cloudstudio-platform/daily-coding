---
name: TwitterBio
description: This project generates Twitter bios for you using AI.
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
url: https://github.com/Nutlope/twitterbio
banner: https://github.com/Nutlope/twitterbio/raw/main/public/screenshot.png
icon: https://cs-res.codehub.cn/vscode/node.svg
video: ./public/TwitterBio.mov
license: ''
order: 2
---

# [TwitterBio.com](https://www.twitterbio.com/)

This project generates Twitter bios for you using AI.

[![Twitter Bio Generator](./public/screenshot.png)](https://www.twitterbio.com)

## How it works

This project uses the [ChatGPT API](https://openai.com/api/) and [Vercel Edge functions](https://vercel.com/features/edge-functions) with streaming. It constructs a prompt based on the form and user input, sends it to the chatGPT API via a Vercel Edge function, then streams the response back to the application.

If you'd like to see how I built this, check out the [video](https://youtu.be/JcE-1xzQTE0) or [blog post](https://vercel.com/blog/gpt-3-app-next-js-vercel-edge-functions).

## Running Locally

After cloning the repo, go to [OpenAI](https://beta.openai.com/account/api-keys) to make an account and put your API key in a file called `.env`.

Then, run the application in the command line and it will be available at `http://localhost:3000`.

```bash
npm run dev
```

## One-Click Deploy

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=vercel-examples):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Nutlope/twitterbio&env=OPENAI_API_KEY&project-name=twitter-bio-generator&repo-name=twitterbio)
