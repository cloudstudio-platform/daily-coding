---
name: Flowise
description: >-
  拖放 UI 以使用 LangchainJS 构建您的定制 LLM 流程
author:
  name: FlowiseAI
  avatar: https://avatars.githubusercontent.com/u/128289781?s=88&v=4
contributors: 
  - name: HenryHengZJ
    avatar: https://avatars.githubusercontent.com/u/26460777?s=64&v=4
  - name: chungyau97
    avatar: https://avatars.githubusercontent.com/u/33013947?s=64&v=4
  - name: neerajkrbansal1996
    avatar: https://avatars.githubusercontent.com/u/22657452?s=64&v=4
  - name: princepride
    avatar: https://avatars.githubusercontent.com/u/29850264?s=64&v=4
  - name: vjsai
    avatar: https://avatars.githubusercontent.com/u/405556?s=64&v=4
  - name: mileszim
    avatar: https://avatars.githubusercontent.com/u/1849508?s=64&v=4
  - name: eltociear
    avatar: https://avatars.githubusercontent.com/u/22633385?s=64&v=4
  - name: kushu7
    avatar: https://avatars.githubusercontent.com/u/31707153?s=64&v=4
  - name: siddiqss
    avatar: https://avatars.githubusercontent.com/u/34280880?s=64&v=4
  - name: xianjianlf2
    avatar: https://avatars.githubusercontent.com/u/53885024?s=64&v=4
language:
  - language: JavaScript
    percentage: 50.1
  - language: TypeScript
    percentage: 46.8
  - language: CSS
    percentage: 1.6
  - language: SCSS
    percentage: 0.9
  - language: HTML
    percentage: 0.5
  - language: Dockerfile
    percentage: 0.1
star: '6.3k'
fork: '1.5k'
url: https://github.com/FlowiseAI/Flowise
banner: ./flowise.gif
icon: https://cs-res.codehub.cn/vscode/node.svg
video: ./Flowise.mov
license: MIT
order: 16
---

# Flowise - LangchainJS UI

<a href="https://github.com/FlowiseAI/Flowise">
<img width="100%" src="https://github.com/FlowiseAI/Flowise/blob/main/images/flowise.gif?raw=true"></a>

拖动UI以使用[LangchainJS](https://github.com/hwchase17/langchainjs)构建您的定制LLM流程

## ⚡快速开始

1. 安装 Flowise
    ```bash
    npm install -g flowise
    ```
2. 开始 Flowise

    ```bash
    npx flowise start
    ```

    有用户名和密码

    ```bash
    npx flowise start --FLOWISE_USERNAME=user --FLOWISE_PASSWORD=1234
    ```

3. 打开 [http://localhost:3000](http://localhost:3000)

## 🐳 Docker

### Docker 组合

1. 转到 `docker` 项目根目录下的文件夹
2. 创建 `.env` 文件并指定 `PORT` (参考 `.env.example`)
3. `docker-compose up -d`
4. 打开[http://localhost:3000](http://localhost:3000)
5. 您可以通过以下方式将容器放下`docker-compose stop`

### Docker 镜像

1. 本地构建镜像:
    ```bash
    docker build --no-cache -t flowise .
    ```
2. 运行:

    ```bash
    docker run -d --name flowise -p 3000:3000 flowise
    ```

3. 停止:
    ```bash
    docker stop flowise
    ```

## 👨‍💻 开发

Flowise 在一个单一存储库中有 3 个不同的模块。

-   `server`: 服务API逻辑的节点后端
-   `ui`: 反应前端
-   `components`: Langchain组件

### 先决条件

-   安装 Yarn
    ```bash
    npm i -g yarn
    ```

### 设置

1. 克隆存储库

    ```bash
    git clone https://github.com/FlowiseAI/Flowise.git
    ```

2. 进入存储库文件夹

    ```bash
    cd Flowise
    ```

3. 安装所有模块的所有 dependencies:

    ```bash
    yarn install
    ```

4. 构建所有代码：

    ```bash
    yarn build
    ```

5. 启动应用程序：

    ```bash
    yarn start
    ```

    您可以通过[http://localhost:3000](http://localhost:3000)访问该app

6. 对于 development build:

    ```bash
    yarn dev
    ```

    任何代码更改都会在[http://localhost:8080](http://localhost:8080)上自动重新加载应用程序

## 🔒 验证

要启用应用程序级别身份验证，请将 `FLOWISE_USERNAME` 和添加 `FLOWISE_PASSWORD` 到 `packages/server` 位置下的 `.env`:

```
FLOWISE_USERNAME=user
FLOWISE_PASSWORD=1234
```

## 📖 文档

[Flowise Docs](https://docs.flowiseai.com/)

## 🌐 自托管

### [Railway](https://docs.flowiseai.com/deployment/railway)

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/YK7J0v)

### [Render](https://docs.flowiseai.com/deployment/render)

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://docs.flowiseai.com/deployment/render)

### [AWS](https://docs.flowiseai.com/deployment/aws)

### [DigitalOcean](https://docs.flowiseai.com/deployment/digital-ocean)

## 💻 云托管

即将推出

## 🙋 支持

欢迎在[讨论](https://github.com/FlowiseAI/Flowise/discussions)中提出任何问题并请求新功能

## 🙌 贡献

请参阅[贡献指南](CONTRIBUTING.md),如果您又任何的疑问或者问题,请通过[Discord](https://discord.gg/jbaHfsRVBW)联系我们
[![Star History Chart](https://api.star-history.com/svg?repos=FlowiseAI/Flowise&type=Timeline)](https://star-history.com/#FlowiseAI/Flowise&Date)

## 📄 许可

该存储库中的源代码根据[MIT License](LICENSE.md)提供
