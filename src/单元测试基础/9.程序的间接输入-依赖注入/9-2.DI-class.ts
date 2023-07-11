import { readFileSync } from "fs";

export class ReadAndProcessFile {
  run(filePath: string) {
    const content = readFileSync(filePath, { encoding: "utf-8" });

    return content + "-> unit test";
  }
}

// 通过构造函数进行依赖注入
export interface FileReader {
  read(filePath: string): string;
}
export class ReadAndProcessFileA {
  private _fileReader: FileReader;
  constructor(fileReader: FileReader) {
    this._fileReader = fileReader;
  }
  run(filePath: string) {
    const content = this._fileReader.read(filePath);

    return content + "-> unit test";
  }
}

// 通过属性进行依赖注入
export class ReadAndProcessFileB {
  private _fileReader: FileReader | undefined;
  constructor() {}
  //   get fileReade() {
  //     return this._fileReader
  //   }
  set fileReader(fileReader: FileReader) {
    this._fileReader = fileReader;
  }
  run(filePath: string) {
    const content = this._fileReader!.read(filePath);

    return content + "-> unit test";
  }
}

// 通过方法进行依赖注入
export class ReadAndProcessFileC {
  private _fileReader: FileReader | undefined;
  constructor() {}

  setFileReader(fileReader: FileReader) {
    this._fileReader = fileReader;
  }
  run(filePath: string) {
    const content = this._fileReader!.read(filePath);

    return content + "-> unit test";
  }
}
