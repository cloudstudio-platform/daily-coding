---
name: Alt Image Generator
description: This project will generate relevant alt text for images using AI.
contributors:
  - name: lfades
    avatar: https://avatars.githubusercontent.com/u/4278345?s=64&v=4
  - name: steven-tey
    avatar: https://avatars.githubusercontent.com/u/28986134?s=64&v=4
  - name: goncy
    avatar: https://avatars.githubusercontent.com/u/6494462?s=64&v=4
  - name: leerob
    avatar: https://avatars.githubusercontent.com/u/9113740?s=64&v=4
  - name: dominiksipowicz
    avatar: https://avatars.githubusercontent.com/u/1570963?s=64&v=4
  - name: GuiBibeau
    avatar: https://avatars.githubusercontent.com/u/22625602?s=64&v=4
  - name: okbel
    avatar: https://avatars.githubusercontent.com/u/1401559?s=64&v=4
  - name: simpsoka
    avatar: https://avatars.githubusercontent.com/u/704152?s=64&v=4
  - name: dferber90
    avatar: https://avatars.githubusercontent.com/u/1765075?s=64&v=4
  - name: TooTallNate
    avatar: https://avatars.githubusercontent.com/u/71256?s=64&v=4
  - name: tknickman
    avatar: https://avatars.githubusercontent.com/u/2933988?s=64&v=4
language:
  - TypeScript
  - JavaScript
  - CSS
  - HTML
  - Svelte
  - Python
star: 2.6k
fork: '784'
url: https://github.com/vercel/examples/tree/main/solutions/alt-tag-generator
banner: >-
  https://github.com/vercel/examples/raw/main/solutions/alt-tag-generator/ogimage.png
readmeRaw: >-
  https://raw.githubusercontent.com/vercel/examples/main/solutions/alt-tag-generator/README.md
order: 5
---

# Alt Image Generator

This project will generate relevant alt text for images using AI.

![Alt Image Generator](ogimage.png)

## How it works

It uses an ML modal from Salesforce called [BLIP](https://github.com/salesforce/BLIP) on [Replicate](https://replicate.com/) to generate relevant alt text for images. You can feed the Next.js API route an image as a query param and it will return a one sentence description of that image.

## Clone and Deploy

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [pnpm](https://pnpm.io/installation) to bootstrap the example:

```bash
pnpm create next-app --example https://github.com/vercel/examples/tree/main/solutions/alt-tag-generator
```

After cloning the repo, go to [Replicate](https://replicate.com/) to make an account and put your API key in a file called `.env.local`.

Then, run the application in the command line and it will be available at `http://localhost:3000`.

```bash
pnpm dev
```

To use the API route, go to the link below in your browser or run a curl command in your terminal to get a sample result. Feel free to replace the dub.sh link with a link to any image.

```bash
curl http://localhost:3000/api/generate?imageUrl=https://dub.sh/confpic
```

## One-Click Deploy

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=vercel-examples):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/examples/tree/main/solutions/alt-tag-generator&env=REPLICATE_API_TOKEN&project-name=alt-tag-generation&repo-name=alt-tag-generation)
