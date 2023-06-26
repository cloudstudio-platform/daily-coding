# 应用推荐

`/recommend-apps` 是用来构建并上传 dashboard 的`应用推荐`的 demo 数据。通过 GitHub action 当 master 上有提交时，会扫描 `/recommend-apps/docs` 下的所有 `README.md` 文件，每个文件会生成一个 demo。建议参考原有的格式进行继续添加。具体细节如下：

## 目录结构说明

```
├── README.md // 说明文档
├── docs // 项目数据
│   ├── **/README.md // 项目数据入口
├── build.js // 数据构建脚本
├── dist // 构建后的数据
├── package.json
```

## 添加新的应用

1. 在`docs`目录下新建一个目录，目录名为应用的名称，如`docs/xxx`
2. 在该目录下新建一个`README.md`文件，文件内容为应用的介绍，如`docs/xxx/README.md`
3. `README.md`文件的内容格式如下：

```
---
title: 应用名称
icon: 应用图标
link: 应用链接
xxx: xxx // 参考已有的应用
---

应用介绍 // 使用markdown语法，一般参考项目的 README.md 文件
```

4. 提交代码，等待构建完成，即可在更新线上的应用列表（谨慎提交到 master ，提交前可以在本地 `npm run build` 之后用 编译后的 json 来 mock 数据验证）
