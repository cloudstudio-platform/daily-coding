---
name: PromptAppGPT
description: >-
 PromptAppGPT 是一个基于低代码提示的快速应用程序开发框架。PromptAppGPT包含基于低代码提示的开发、GPT文本生成、DALLE图像生成、在线提示编辑器+编译器+运行器、自动用户界面生成、支持插件扩展等功能。PromptAppGPT旨在启用自然语言应用程序基于GPT的开发。
author:
  name: mleoking
  avatar: https://avatars.githubusercontent.com/u/5763751?s=96&v=4
contributors: []
language:
  - language: JavaScript
    percentage: 95.5
  - language: HTML
    percentage: 2.8
  - language: CSS
    percentage: 1.7
star: 235
fork: 45
url: https://github.com/mleoking/PromptAppGPT
banner: ./images/pag-image-creator-edit.png
icon: https://cs-res.codehub.cn/vscode/node.svg
video: ./promptappgpt.mov
license: MIT
order: 20
---

# 💡 PromptAppGPT
&nbsp; &nbsp;PromptAppGPT 是一个基于低代码提示的快速应用程序开发框架。PromptAppGPT包含基于低代码提示的开发、GPT文本生成、DALLE图像生成、在线提示编辑器+编译器+运行器、自动用户界面生成、支持插件扩展等功能。PromptAppGPT旨在启用自然语言应用程序基于GPT的开发。

**PromptAppGPT 显着降低了 GPT 应用程序开发的门槛，让任何人都可以用几行低代码开发类似 AutoGPT 的应用程序**

&nbsp; &nbsp;请参阅示例应用程序：[Imaginative Image Creator, Web & Image Searcher, My AutoGPT, ...](PagApps.md)

![PromptAppGPT](images/pag-image-creator-edit.png)

## 🛠️ 特征

- ⚡ 基于低代码提示的快速应用程序开发
- 🧠 用于文本生成的 GPT3/4 执行器
- 🍯 用于图像生成的 Dalle 执行器
- 🔌 执行器（插件）的可扩展性
- #️⃣ 在线提示编辑器、编译器和运行器
- ⚙️ 自动生成用户界面
- 🧨 中英文用户界面

## 🚀 快速开始

1. 获取 OpenAI[API Key](https://platform.openai.com/account/api-keys).
2. 访问网站[PromptAppGPT Web Home](http://promptappgpt.wangzhishi.net)或下载[Windows 10+ APP](dist/pag.exe).
3. 设置 OpenAI 密钥/OpenAI Api 代理/OpenAI Gpt 模型。
- OpenAI Key：从OpenAI获取的api密钥。
- OpenAI Api Proxy：openai api的代理，如果您可以直接访问openai api，则代理为`https://api.openai.com/`, 否则代理应该是另一个 (e.g. `https://api.openai-proxy.com/`) 可以将您的请求代理到openai api的网站
- OpenAI Gpt 模型: gpt-4/gpt-3.5-turbo

![Set the OpenAI Key/OpenAI Api Proxy/OpenAI Gpt Model](images/pag-settings-note.png)

4. 选择并运行应用程序。

![Select and run a app](images/pag-image-creator-run1-note.png)
![Select and run a app](images/pag-image-creator-run2-note.png)
![Select and run a app](images/pag-image-creator-run3-note.png)

5. 编辑并编译应用程序。

![Edit and compile the app](images/pag-image-creator-edit-note.png)


## ⌨️ 发展

&nbsp; &nbsp;PromptAppGPT 的代码基于 YAML 格式。要基本了解 YAML 格式，您可以参考[YAML cheatsheet](https://quickref.me/yaml).

&nbsp; &nbsp;我们通过以下程序来说明如何在PromptAppGPT中进行应用程序开发。

``` yaml
---
author: Leo
name: Imaginative Image Creator
description: Create imaginative images from any language with GPT and DALL·E
gptRound: single
failedRetries: 2

sysTask:
  - executor: gpt
    prompt: You are an imaginative image creator. 

userTask: 
  - trigger: dalle_prompt=
    executor: dalle
    prompt: |
      prompt: $i{Word to draw:@textarea=$e{=(.*)}}
      n: $i{Num of images:@select#1/2/3/4=1}
      size: $i{Size of images:@select#256x256/512x512/1024x1024=512x512}
    outputer: dalle output $e{.*}
  - executor: gpt
    prompt: | 
      Generate a detailed Dall-E prompt with several adjectives for the following text:
      ```$i{Text to draw:@input}'''
    outputer: dalle_prompt=$e{.*} 
    validator: .{15,}

extra: 
```
**author**部分是作者姓名;**name** 是应用程序的名称；**description**部分是应用程序的描述；**gptRound** 部分确定是否将 gpt 用于 (`single`) 或者 multi-round (`multiple`)对话, 对于大多数应用程序，该值应为 `single`; **failedRetries** 部分设置失败或输出无效时重试的次数。

**sysTask** 部分是由 `-` 分隔的任务集合，,设置gpt的行为,对于许多应用程序，此字段可以留空。当此部分不为空时，每个任务必须定义 `prompt` 和 `executor` 属性

- `executor` 是任务的执行者。
- `prompt` 是输入执行器的文本。

**userTask** 部分包含由  `-` 分隔的用户定义的任务. 每个任务必须定义`prompt` 和 `executor`属性, 并且`trigger`, `outputer` 和 `validator`是可选的. 应用程序以有序的方式循环执行用户任务，使用前一个任务的输出来匹配每个任务的，第一个通过匹配的任务是当前正在运行的任务。第一次运行时应用程序的输出为空。没有属性的任务可以匹配任何输出，并且这些任务应该放置在用户任务的末尾，以允许首先触发具有更明确条件的任务。

- `trigger` 是任务的触发器，它是一个正则表达式。当任务的触发器与前一个任务的输出匹配时，任务就会运行。这是[正则表达式备忘单](https://quickref.me/regex).
- `executor` 是任务的执行者。目前支持 `gpt`, `dalle`, `bingWeb`, `bingImage`, `webFetch`, `javaScript`, 和 `log` 的执行者
- `prompt`是输入执行器的文本。其中 `prompt`, `$i{xxx}` 是用户输入，是从先前 `$e{xxx}` 任务输出中提取文本的提取器。
- `outputer` 是用于后处理此任务的输出的文本。是从此 `$e{xxx}` 任务的输出中提取文本的提取器。
- `validator` 是用于验证此任务的输出的正则表达式。如果其输出与正则表达式不匹配，应用程序将停止在当前任务处`validator` 。例如`validator: .{15,}` 检查任务输出的长度是否大于或等于15。

&nbsp; &nbsp;应用程序用户界面的输入是 `$i{xxx}`根据`prompt`.表达式的格式 `$i{xxx}` 为 `$i{input label@input type#select options=default value}`. 目前支持三种类型的输入： `select`, `input`, and `textarea`. 输入的选项 `select` input 以`/`为分隔

&nbsp; &nbsp;表达式是从上一个此`$e{xxx}` 任务的输出中提取文本的提取器。表达式的格式为 `$e{xxx}` expression is `$e{regular expression}`如果正则表达式中存在组构造，则仅提取与该组匹配的文本，否则提取与整个正则表达式匹配的文本。

&nbsp; &nbsp;额外部分可以为空，并且当前未启用。

## ❤️ 贡献者

![Contributors](https://contrib.rocks/image?repo=mleoking/PromptAppGPT)

## 🙋 常见问题解答

### 无法获取错误

&nbsp; &nbsp;检查您是否可以访问互联网并正确设置 OpenAI Key/OpenAI Api Proxy/OpenAI Gpt Model。

### 网络安全错误

&nbsp; &nbsp;当 PromptAppGPT 从网站启动时，浏览器安全检查会阻止对 openai api 的请求。您可以按照以下步骤解锁 PromptAppGPT 网站。

**对于 Windows Chrome 用户：**
1. 右键桌面，添加新快捷方式
2. 将目标添加为“[PATH_TO_CHROME]\chrome.exe” --disable-web-security --user-data-dir=%LOCALAPPDATA%\Google\chromeTemp
3. 单击 OK.

**对于 Mac Chrome 用户：**
1. 打开 -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security

**对于 Linux Chrome 用户：**
1. google-chrome --disable-web-security -–allow-file-access-from-files
