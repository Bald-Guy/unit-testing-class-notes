import { glob } from "glob";
import fs from "fs/promises";
import { build } from "esbuild";
// 1. 获取到所有的测试脚本  *.spec.js
// 2. 执行这些脚本

const files = glob.sync("src/**/*.spec.js");
for (const file of files) {
  const fileContent = await fs.readFile(file, "utf-8");
  await runModule(fileContent + ";import {run} from './core.js'; run()");
}

// 打包
async function runModule(fileContent) {
  const result = await build({
    stdin: {
      contents: fileContent,
      resolveDir: process.cwd() + "/src/单元测试基础/2.实现mini-test-runner",
    },
    write: false,
    bundle: true,
    target: "esnext",
  });
  console.log(result.outputFiles[0].text)
  /**
   * 注意: 这里虽然将 target 设置成了 esnext, 但是打包之后的代码仍然会将 const 转为 var, 原因如下:
   *    1. 在 Safari 浏览器中, 使用 const 关键词进行的变量声明性能要比使用 var 慢很多
   *    2. esbuild 为了保持ESM（ECMAScript模块）静态绑定语义的性能优势，
   *       需要推迟顶级常量的初始化，这就意味着不能使用 const, 因为 const 关键字要求在声明时就给常量赋值。
   *    3. 有利于代码压缩
   */

  new Function(result.outputFiles[0].text)();
}
