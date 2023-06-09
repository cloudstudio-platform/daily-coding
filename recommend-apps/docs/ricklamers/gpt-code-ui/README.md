---
name: GPT-Code-UI
description: >-
  An open source implementation of OpenAI's ChatGPT Code interpreter.
  Simply ask the OpenAI model to do something and it will generate & execute the code for you.
author:
  name: ricklamers
  avatar: https://avatars.githubusercontent.com/u/1309307?s=88&v=4
contributors:
  - name: ricklamers
    avatar: https://avatars.githubusercontent.com/u/1309307?s=64&v=4
  - name: lightningRalf
    avatar: https://avatars.githubusercontent.com/u/126403501?s=64&v=4
  - name: tajkirkpatrick
    avatar: https://avatars.githubusercontent.com/u/50558516?s=64&v=4
language:
  - language: Python
    percentage: 53.4
  - language: TypeScript
    percentage: 32.0
  - language: CSS
    percentage: 8.6
  - language: Makefile
    percentage: 2.8
  - language: Shell
    percentage: 1.5
  - language: JavaScript
    percentage: 0.9
  - language: HTML
    percentage: 0.8
star: 1.7k
fork: 242
url: https://github.com/cloudstudio-platform/gpt-code-ui
banner: ./239578679-c29c504a-a7ed-4ae0-9360-d7224bc3e3d6.png
icon: https://cs-res.codehub.cn/vscode/python.svg
video: ./GPT-Code-UI.mov
license: MIT
order: 5
---

<img src="https://github.com/ricklamers/gpt-code-ui/assets/1309307/9ad4061d-2e26-4407-9431-109b650fb022" alt="GPT-Code logo" width=240 />

An open source implementation of OpenAI's ChatGPT [Code interpreter](https://openai.com/blog/chatgpt-plugins#code-interpreter).

Simply ask the OpenAI model to do something and it will generate & execute the code for you.

Read the [blog post](https://ricklamers.io/posts/gpt-code) to find out more.

## Installation

Open a terminal and run:

```
$ pip install gpt-code-ui
$ gptcode
```

## User interface
<img src="https://github.com/ricklamers/gpt-code-ui/assets/1309307/c29c504a-a7ed-4ae0-9360-d7224bc3e3d6" alt="GPT-Code logo" width="100%" />
 
## Features
- File upload
- File download
- Context awareness (it can refer to your previous messages)
- Generate code
- Run code (Python kernel)
- Model switching (GPT-3.5 and GPT-4)

## Misc.
### Using .env for OpenAI key
You can put a .env in the working directory to load the `OPENAI_API_KEY` environment variable.

### Configurables
Set the `API_PORT`, `WEB_PORT`, `SNAKEMQ_PORT` variables to override the defaults.

Set `OPENAI_BASE_URL` to change the OpenAI API endpoint that's being used (note this environment variable includes the protocol `https://...`).

### Docker
[localagi](https://github.com/localagi) took the effort of bundling the Python package in a Docker container. Check it out here: [gpt-code-ui-docker](https://github.com/localagi/gpt-code-ui-docker).

## Contributing
Please do and have a look at the [contributions guide](.github/CONTRIBUTING.md)! This should be a community initiative. I'll try my best to be responsive.