---
name: GPT-Code-UI
description: >-
  OpenAI 的 ChatGPT 代码解释器的开源实现。只需要求 OpenAI 模型执行某些操作，它就会为您生成并执行代码。
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

&nbsp; &nbsp; OpenAI的ChatGPT[代码解释器](https://openai.com/blog/chatgpt-plugins#code-interpreter)的开源实现

&nbsp; &nbsp;只需要求 OpenAI 模型执行某些操作，它就会为您生成并执行代码

&nbsp; &nbsp;阅读[博客文章](https://ricklamers.io/posts/gpt-code)以了解更多信息
## 社区
&nbsp; &nbsp;Judah Cooper 主动提出创建并管理一个Discord社区[在这里](https://discord.gg/ZmTQwpkYu6)加入

## 安装

&nbsp; &nbsp;打开终端并运行：

```
pip install --extra-index-url https://pypi.python.org/simple gpt-code-ui
gptcode
```

&nbsp; &nbsp;为了使basic dependencies可用，建议pip在运行的shell中使用的Python环境中运行以下安装`gptcode`:

```sh
pip install "numpy>=1.24,<1.25" "dateparser>=1.1,<1.2" "pandas>=1.5,<1.6" "geopandas>=0.13,<0.14" "PyPDF2>=3.0,<3.1" "pdfminer>=20191125,<20191200" "pdfplumber>=0.9,<0.10" "matplotlib>=3.7,<3.8"
```

## 用户界面
<img src="https://github.com/ricklamers/gpt-code-ui/assets/1309307/c29c504a-a7ed-4ae0-9360-d7224bc3e3d6" alt="GPT-Code logo" width="100%" />
 
## 特征
- 上传文件
- 文件下载
- 上下文感知（可以参考您之前的消息）
- 生成代码
- 运行代码（Python内核）
- 模型切换（GPT-3.5和GPT-4）
## 杂项
### 使用 .env 作为 OpenAI key
&nbsp; &nbsp;您可以在工作目录中放置一个 .env 来加载 `OPENAI_API_KEY` 环境变量

### 可配置项
&nbsp; &nbsp;设置 `API_PORT`, `WEB_PORT`, `SNAKEMQ_PORT` 变量以覆盖默认值

&nbsp; &nbsp;设置`OPENAI_BASE_URL` 为更改正在使用的 OpenAI API 端点（请注意此环境变量包括protocol `https://...`).

&nbsp; &nbsp;您可以在存储库中使用`.env.example`(确保您`git clone`首先使用存储库来获取文件)

&nbsp; &nbsp;对于 Azure OpenAI 服务, 还有其他可配置变量,例如部署名称。请参阅 `.env.azure-example` 获&nbsp; &nbsp;取更多信息。请注意，Azure OpenAI 服务当前不支持 UI 上的模型选择。
```
cp .env.example .env
vim .env
gptcode
```

### Docker
&nbsp; &nbsp;[localagi](https://github.com/localagi) 努力将 Python 包捆绑到 Docker 容器中。在这里&nbsp; &nbsp;查看: [gpt-code-ui-docker](https://github.com/localagi/gpt-code-ui-docker).

## 贡献
&nbsp; &nbsp;请执行并查看[贡献指南](.github/CONTRIBUTING.md)!这应该是一个社区倡议。我会尽力做出回应。
