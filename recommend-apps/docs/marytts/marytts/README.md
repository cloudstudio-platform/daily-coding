---
name: MaryTTS
description: >-
  这是多语言开源 MARY 文本转语音平台 (MaryTTS) 的源代码存储库。MaryTTS是一个用纯Java编写的客户端-服务器系统，因此它可以在许多平台上运行。
author:
  name: marytts
  avatar: https://avatars.githubusercontent.com/u/1397306?s=88&v=4
contributors:
  - name: psibre
    avatar: https://avatars.githubusercontent.com/u/1278639?s=64&v=4
  - name: marc1s
    avatar: https://avatars.githubusercontent.com/u/1101896?s=64&v=4
  - name: marcelach1
    avatar: https://avatars.githubusercontent.com/u/1279715?s=64&v=4
  - name: seblemaguer
    avatar: https://avatars.githubusercontent.com/u/4820197?s=64&v=4
  - name: ftesser
    avatar: https://avatars.githubusercontent.com/u/983665?s=64&v=4
  - name: aitorme
    avatar: https://avatars.githubusercontent.com/u/13557954?s=64&v=4
  - name: HaraldBerthelsen
    avatar: https://avatars.githubusercontent.com/u/1613228?s=64&v=4
  - name: timobaumann
    avatar: https://avatars.githubusercontent.com/u/4908990?s=64&v=4
  - name: Rootex
    avatar: https://avatars.githubusercontent.com/u/2598738?s=64&v=4
  - name: wholder
    avatar: https://avatars.githubusercontent.com/u/1062514?s=64&v=4
  - name: giuliopaci
    avatar: https://avatars.githubusercontent.com/u/311723?s=64&v=4
language:
  - language: Java
    percentage: 97.4
  - language: XSLT
    percentage: 1.1
  - language: Groovy
    percentage: 0.6
  - language: JavaScript
    percentage: 0.4
  - language: HTML
    percentage: 0.3
  - language: Raku
    percentage: 0.1
star: 2k
fork: '692'
url: https://github.com/marytts/marytts
banner: ./tts-banner.png
icon: https://cs-res.codehub.cn/vscode/java.svg
video: ./MaryTTS.mov
license: LGPL-3.0
order: 4
---

[![CI](https://github.com/marytts/marytts/actions/workflows/main.yml/badge.svg)](https://github.com/marytts/marytts/actions/workflows/main.yml)

# MaryTTS

&nbsp; &nbsp;这是多语言开源 MARY 文本转语音平台 (MaryTTS) 的源代码存储库。MaryTTS是一个用纯Java编写的客户端-服务器&nbsp; &nbsp;系统，因此它可以在许多平台上运行。
**要获取可供使用的可下载包，请参阅[发布页面](https://github.com/marytts/marytts/releases).**

&nbsp; &nbsp;较老的文档也可以在 https://github.com/marytts/marytts-wiki, http://mary.dfki.de 和 https://mary.opendfki.de 中找到

&nbsp; &nbsp;该README是 MaryTTS 源代码存储库的一部分。它包含有关编译和开发 MaryTTS 源的信息。

&nbsp; &nbsp;该代码采用较宽松的通用公共许可证 LGPL 版本 3 - 请参阅 LICENSE.md 了解详细信息。


## 运行 MaryTTS

&nbsp; &nbsp;运行 `./gradlew run`  (或者 `gradlew.bat run` 在 Windows 上) 启动 MaryTTS 服务器
&nbsp; &nbsp;然后使用 Web 浏览器访问 http://localhost:59125 

如果您想在不同的地址和端口上启动 MaryTTS，您可以使用以下选项：
```sh
./gradlew run -Dsocket.port=5920 -Dsocket.addr=0.0.0.0 --info
```
其中 5920 是新端口，0.0.0.0 是新地址。当地址为0.0.0.0时，所有接口都会被监听。

&nbsp; &nbsp;通过使用选项`--info`, 您可以将 `gradle` *AND* MaryTTS 的记录器设置为 INFO 级别。通过使用 `--debug`, 您可以将级别设置为 DEBUG。
&nbsp; &nbsp;还可以通过定义系统变量`log4j.logger.marytts`将 MaryTTS记录器级别设置为  `INFO` 或 `DEBUG` 
## 下载并安装语音

&nbsp; &nbsp;运行 `./gradlew runInstallerGui` 以启动安装程序 GUI 以下载并安装更多语音。在使用新语音之前，需要重新启动正在运行的 MaryTTS 服务器。

## 创建 MaryTTS

&nbsp; &nbsp;运行 `./gradlew build`.
&nbsp; &nbsp;这将编译和测试所有模块，并为每个下创建输出 `build/`.

&nbsp; &nbsp;请注意，以前，MaryTTS v5.x 是使用 Maven 构建的。请参考[**5.x branch**](https://github.com/marytts/marytts/tree/5.x).


## 包装 MaryTTS

&nbsp; &nbsp;运行 `./gradlew distZip` 或 `./gradlew distTar` 在`build/distributions`下构建分发包
&nbsp; &nbsp;您还可以通过运行`./gradlew installDist`直接"install"解压后的发行版`build/install`到其中

&nbsp; &nbsp;该发行版包含运行独立的 MaryTTS 服务器实例或下载和安装更多语音所需的所有文件。运行服务器或安装程序 GUI 的脚本可以在发行版的目录`bin/`中找到


##  在您自己的 Java 项目中使用 MaryTTS

&nbsp; &nbsp;在您自己的 Java 项目中使用 MaryTTS 的最简单方法是声明对相关 MaryTTS 工件的依赖关系，例如默认的美国英语 HSMM 语音：


### Maven

添加到您的`pom.xml`:
```xml
<repositories>
  <repository>
    <url>https://mlt.jfrog.io/artifactory/mlt-mvn-releases-local</url>
  </repository>
</repositories>

<dependencies>
  <dependency>
    <groupId>de.dfki.mary</groupId>
    <artifactId>voice-cmu-slt-hsmm</artifactId>
    <version>5.2.1</version>
    <exclusions>
      <exclusion>
        <groupId>com.twmacinta</groupId>
        <artifactId>fast-md5</artifactId>
      </exclusion>
      <exclusion>
         <groupId>gov.nist.math</groupId>
         <artifactId>Jampack</artifactId>
      </exclusion>
    </exclusions>
  </dependency>
</dependencies>
```

### Gradle

添加到 `build.gradle`:
```groovy
repositories {
   mavenCentral()

   exclusiveContent {
      forRepository {
         maven {
            url 'https://mlt.jfrog.io/artifactory/mlt-mvn-releases-local'
         }
      }
      filter {
         includeGroup 'de.dfki.lt.jtok'
      }
   }
}

dependencies {
   implementation group: 'de.dfki.mary', name: 'voice-cmu-slt-hsmm', version: '5.2.1', {
      exclude group: 'com.twmacinta', module: 'fast-md5'
      exclude group: 'gov.nist.math', module: 'Jampack'
   }
}
```


## 合成语音

&nbsp; &nbsp;此存储库中提出了文本到 wav 的基本示例
- Maven: https://github.com/marytts/marytts-txt2wav/tree/maven
- Gradle: https://github.com/marytts/marytts-txt2wav/tree/gradle


## 将 MaryTTS 用于其他编程语言

&nbsp; &nbsp;如果您想将MaryTTS用于其他编程语言（例如python），您需要实现3个步骤

1. 编译 marytts
2. 启动服务器
3. 服务器上的查询综合


### 使用服务器合成语音

&nbsp; &nbsp;使用服务器合成语音非常容易。您需要生成正确的 HTTP 查询并处理关联的 HTTP 响应。建议举例：
- python 3: https://github.com/marytts/marytts-txt2wav/tree/python
- shell: https://github.com/marytts/marytts-txt2wav/tree/sh

## 额外文档

### 服务器即服务（Linux 特定）

&nbsp; &nbsp;[这里](./src/main/dist/misc/marytts.server)提出了如何将 marytts 服务器定义为服务的示例。


### 用户词典

&nbsp; &nbsp;您可以通过添加用户词典来扩展词典。有关如何执行此操作的文档位于[此处](./src/main/dist/user-dictionaries/README.md).

## 贡献

&nbsp; &nbsp;为 MaryTTS 源代码做出贡献的推荐工作流程是遵循 GitHub 模型：

1. 通过导航到 https://github.com/marytts/marytts 并单击“fork” ，将 MaryTTS 存储库分叉到您自己的 GitHub 个人资料中（当然您需要一个 GitHub 帐户）;

2. 使用 `git clone`, `commit`, 和 `push` 命令对您自己的 marytts 存储库进行修改；在此过程中,请确保`git pull upstream master` 定期与主存储库的最新进展保持同步；

3. 当您认为可重用的贡献已准备就绪时，请在 GitHub 上打开“拉取请求”，以便轻松合并到主存储库中。

请查看[GitHub 文档](http://help.github.com/) 以获取更多详细信息。

### IDE 配置

&nbsp; &nbsp;Wiki 页面可帮助您配置 IDE 来开发 MaryTTS。以下 IDE 已经过测试和记录：

- 智能 IDEA
- Eclipse: https://github.com/marytts/marytts/wiki/Eclipse
