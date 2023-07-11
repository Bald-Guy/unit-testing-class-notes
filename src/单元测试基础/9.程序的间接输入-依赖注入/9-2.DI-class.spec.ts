import { it, expect, describe } from "vitest";
import {
  ReadAndProcessFileA,
  ReadAndProcessFileB,
  ReadAndProcessFileC,
  FileReader,
} from "./9-2.DI-class";

describe("di - class", () => {
  it("通过构造函数进行依赖注入的class", () => {
    class StubFileReader implements FileReader {
      read(filePath: string): string {
        return "John";
      }
    }
    const readAndProcessFile = new ReadAndProcessFileA(new StubFileReader());

    expect(readAndProcessFile.run("example.txt")).toBe("John-> unit test");
  });
  it("通过属性进行依赖注入的class", () => {
    class StubFileReader implements FileReader {
      read(filePath: string): string {
        return "John";
      }
    }
    const readAndProcessFile = new ReadAndProcessFileB();
    readAndProcessFile.fileReader = new StubFileReader();

    expect(readAndProcessFile.run("example.txt")).toBe("John-> unit test");
  });
  it("通过方法进行依赖注入的class", () => {
    class StubFileReader implements FileReader {
      read(filePath: string): string {
        return "John";
      }
    }
    const readAndProcessFile = new ReadAndProcessFileC();
    readAndProcessFile.setFileReader(new StubFileReader());

    expect(readAndProcessFile.run("example.txt")).toBe("John-> unit test");
  });
});
