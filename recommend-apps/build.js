const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const cheerio = require("cheerio");
const { Octokit } = require("@octokit/core");
const crypto = require("crypto");
const url = require("url");

const CDN_URL = "https://cs-daily-coding.codehub.cn";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const root_dir = path.resolve(__dirname, "docs");
const output_dir = path.resolve(__dirname, "dist");

const output_files = {};

const index = [];

function generateFiles(files) {
  for (const [key, value] of Object.entries(files)) {
    // 打印文件信息
    console.log(key);

    if (value.type === "file") {
      copyFileSync(value.value, path.resolve(output_dir, key));
    } else if (value.type === "content") {
      outputFileSync(path.resolve(output_dir, key), value.value);
    }
  }
}

function outputFileSync(filePath, fileContent) {
  // 确保文件夹存在
  if (!fs.existsSync(path.dirname(filePath))) {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
  }
  // 写入文件
  fs.writeFileSync(filePath, fileContent);
}

function copyFileSync(src, dist) {
  // 确保文件夹存在
  if (!fs.existsSync(path.dirname(dist))) {
    fs.mkdirSync(path.dirname(dist), { recursive: true });
  }
  // 写入文件
  fs.copyFileSync(src, dist);
}

function readDirRecursively(dir) {
  const result = [];
  // 读取目录中的所有文件和文件夹
  const files = fs.readdirSync(dir);
  // 遍历所有文件和文件夹
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const filePath = path.join(dir, file);
    // 判断是否为文件
    const stat = fs.statSync(filePath);
    if (stat.isFile() && file.toLowerCase() === "readme.md") {
      // 如果是 README.md 文件，将其路径添加到结果数组中
      result.push(filePath);
    } else if (stat.isDirectory()) {
      // 如果是文件夹，递归调用 readDirRecursively() 函数
      result.push(...readDirRecursively(filePath));
    }
  }

  return result;
}

// 将需要 copy 的相对文件路径添加到 output_files 中，并返回 cos 访问路径
function copyFileToOutputDir(addr , currentfile) {
  // 判断是否为相对路径
  if (addr && !url.parse(addr).protocol) {
    const filepath = path.resolve(path.dirname(currentfile), addr);

    // 判断文件是否存在 && 文件不是当前文件
    if (fs.existsSync(filepath) && filepath !== currentfile) {
      const filename = path.basename(filepath);
      const fileContent = fs.readFileSync(filepath);
      const copntentHash = crypto
        .createHash("md5")
        .update(fileContent)
        .digest("hex");
        const dist = path.resolve(
          output_dir,
          `${copntentHash}-${filename}`
        );

        output_files[dist] = {
          type: "file",
          value: filepath,
        };

        return url.resolve(CDN_URL, `${copntentHash}-${filename}`);
    }
  }
}

const docs = readDirRecursively(root_dir);

const all = docs.map((doc) => {
  // 将 README.md 文件内容元数据和内容分开
  const fileContent = fs.readFileSync(doc, "utf-8");

  // 解析元数据和内容
  const { data, content } = matter(fileContent);

  data.banner = copyFileToOutputDir(data.banner, doc) || data.banner;
  data.video = copyFileToOutputDir(data.video, doc) || data.video;

  const fileId = crypto.createHash("md5").update(doc + fileContent).digest("hex");

  // 使用 github markdown api 将 content 转换为 html
  return octokit
    .request("POST /markdown", {
      text: content,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    })
    .then((res) => {
      // 通过 cheerio 将 html 中的相对路径转换为绝对路径
      const $ = cheerio.load(res.data);
      $("[href],[src]").each((i, element) => {
        const $element = $(element);
        const href = $element.attr("href");
        const src = $element.attr("src");
        const hrefOrSrc = url.parse(href || src).href;

        const cdnUrl = copyFileToOutputDir(hrefOrSrc, doc);

        cdnUrl && $element.attr(
          href ? "href" : "src",
          cdnUrl,
        );

        // 将 html 片段写入到 data.readmeHtml 中
        data.readmeHtml = $("body").html();
      });

      index.push({ ...data, readme: content, id: fileId });
    });
});

Promise.all(all).then(() => {
  // 将 index.json 写入到 dist 目录中
  output_files["index.json"] = {
    type: "content",
    value: JSON.stringify(index, null, 2),
  };

  generateFiles(output_files);
});
