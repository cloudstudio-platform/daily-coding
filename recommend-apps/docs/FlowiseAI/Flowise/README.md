---
name: https://github.com/FlowiseAI/Flowise
description: >-
  Drag & drop UI to build your customized LLM flow using LangchainJS
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
  - JavaScript
  - TypeScript
  - CSS
  - SCSS
  - HTML
  - Dockerfile
star: '6.3k'
fork: '1.5k'
url: https://github.com/FlowiseAI/Flowise
banner: 'https://github.com/FlowiseAI/Flowise/raw/main/images/flowise.gif?raw=true'
icon: https://cs-res.codehub.cn/vscode/javascript.svg
video: ./Flowise.mov
order: 16
---

<!-- markdownlint-disable MD030 -->

# Flowise - LangchainJS UI

<a href="https://github.com/FlowiseAI/Flowise">
<img width="100%" src="https://github.com/FlowiseAI/Flowise/blob/main/images/flowise.gif?raw=true"></a>

Drag & drop UI to build your customized LLM flow using [LangchainJS](https://github.com/hwchase17/langchainjs)

## ⚡Quick Start

1. Install Flowise
    ```bash
    npm install -g flowise
    ```
2. Start Flowise

    ```bash
    npx flowise start
    ```

    With username & password

    ```bash
    npx flowise start --FLOWISE_USERNAME=user --FLOWISE_PASSWORD=1234
    ```

3. Open [http://localhost:3000](http://localhost:3000)

## 🐳 Docker

### Docker Compose

1. Go to `docker` folder at the root of the project
2. Create `.env` file and specify the `PORT` (refer to `.env.example`)
3. `docker-compose up -d`
4. Open [http://localhost:3000](http://localhost:3000)
5. You can bring the containers down by `docker-compose stop`

### Docker Image

1. Build the image locally:
    ```bash
    docker build --no-cache -t flowise .
    ```
2. Run image:

    ```bash
    docker run -d --name flowise -p 3000:3000 flowise
    ```

3. Stop image:
    ```bash
    docker stop flowise
    ```

## 👨‍💻 Developers

Flowise has 3 different modules in a single mono repository.

-   `server`: Node backend to serve API logics
-   `ui`: React frontend
-   `components`: Langchain components

### Prerequisite

-   Install Yarn
    ```bash
    npm i -g yarn
    ```

### Setup

1. Clone the repository

    ```bash
    git clone https://github.com/FlowiseAI/Flowise.git
    ```

2. Go into repository folder

    ```bash
    cd Flowise
    ```

3. Install all dependencies of all modules:

    ```bash
    yarn install
    ```

4. Build all the code:

    ```bash
    yarn build
    ```

5. Start the app:

    ```bash
    yarn start
    ```

    You can now access the app on [http://localhost:3000](http://localhost:3000)

6. For development build:

    ```bash
    yarn dev
    ```

    Any code changes will reload the app automatically on [http://localhost:8080](http://localhost:8080)

## 🔒 Authentication

To enable app level authentication, add `FLOWISE_USERNAME` and `FLOWISE_PASSWORD` to the `.env` file in `packages/server`:

```
FLOWISE_USERNAME=user
FLOWISE_PASSWORD=1234
```

## 📖 Documentation

[Flowise Docs](https://docs.flowiseai.com/)

## 🌐 Self Host

### [Railway](https://docs.flowiseai.com/deployment/railway)

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/YK7J0v)

### [Render](https://docs.flowiseai.com/deployment/render)

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://docs.flowiseai.com/deployment/render)

### [AWS](https://docs.flowiseai.com/deployment/aws)

### [DigitalOcean](https://docs.flowiseai.com/deployment/digital-ocean)

## 💻 Cloud Hosted

Coming soon

## 🙋 Support

Feel free to ask any questions, raise problems, and request new features in [discussion](https://github.com/FlowiseAI/Flowise/discussions)

## 🙌 Contributing

See [contributing guide](CONTRIBUTING.md). Reach out to us at [Discord](https://discord.gg/jbaHfsRVBW) if you have any questions or issues.
[![Star History Chart](https://api.star-history.com/svg?repos=FlowiseAI/Flowise&type=Timeline)](https://star-history.com/#FlowiseAI/Flowise&Date)

## 📄 License

Source code in this repository is made available under the [MIT License](LICENSE.md).