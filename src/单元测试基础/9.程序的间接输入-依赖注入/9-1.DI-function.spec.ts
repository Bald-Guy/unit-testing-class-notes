import { it, expect } from "vitest";
import { readAndProcessFile, FileReader } from "./9-1.DI-function";

it("read and process file", () => {
  // 如果没有进行依赖注入的话, 这里的做法就需要同7-1程序的间接输入-第三方库中那样使用 mock
  class StubFileReader implements FileReader {
    read(filePath: string) {
      return "Tom";
    }
  }

  const result = readAndProcessFile("example.txt", new StubFileReader());

  expect(result).toBe("Tom-> test unit");
});
/* 
依赖倒置原则:
高层模块不应该依赖低层模块, 两者都应该依赖其抽象
抽象不应该依赖细节, 细节应该依赖于抽象

改造前: readAndProcessFile(高层摸块)依赖于fs(低层模块)
改造后: readAndProcessFile(高层摸块)依赖于FileReader(接口), StubFileReader依赖于FileReader(接口)

程序接缝:
程序接缝是代码中的一个分界线, 它允许我们将一个组件与其他组件隔离开来. 通过创建接缝, 我们可以轻松地替换一个组件的实现, 而不影响其他代码. 这有助于将组件之间的耦合度降至最低, 使得代码更加模块化.

程序接缝的应用见👆: StubFileReader
*/
