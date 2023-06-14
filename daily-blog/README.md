<h1>Next.js + Tailwind CSS For Daily-Coding</h1>

<p>
 🧑‍💻👩‍💻👨‍💻
</p>

> Cloud Studio Blog

## 🚀 功能点

- 📝 MDX support
- 🦾 TypeScript
- 🗂 File based routing
- 🌍 I18n ready
- ⚙️ Eslint + Prettier
- 🔥 TailwindCss

## 🦄 技术栈

- [Next.js](https://nextjs.org/) - The React Framework.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom user interfaces.
- [mdx-bundler](https://github.com/kentcdodds/mdx-bundler) - Compile and bundle your MDX files and their dependencies. FAST.
- [React 18.x](https://reactjs.org/) - A JavaScript library for building user interfaces.


## 🚗 使用指南

### 本地博客启动地址

http://localhost:3000/blog

### 启动

进入 daily-blog 之后，使用 `yarn start` 启动

### node 版本

目前采用都是比较新的库，node 须 16+

### next/image 引用问题

next.js 13 以前的版本使用 `next/legacy/image`，之后新页面编写都使用最新的 `next/image`，api 相关可查看 next.js 官方最新文档。

## 📒 目录规范

- `src/components` 存放公共业务组件
- `src/css` 存放所有页面样式，支持 sass 写法
- `src/layouts` 博客列表，博客详情页面布局
- `src/pages` 新增页面入口
- `src/public` logo, favicons 等简单图片，其他图片建议存放在 COS
- `src/script` 工具类函数
- `src/store` 存放静态数据
- `src/hook` 自定义hook

