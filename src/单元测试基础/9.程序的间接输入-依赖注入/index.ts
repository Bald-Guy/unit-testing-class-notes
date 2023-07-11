import { readFileSync } from "fs";
import { readAndProcessFile, FileReader } from "./9-1.DI-function";

class TxtFileReader implements FileReader {
  read(filePath: string) {
    return readFileSync(filePath, { encoding: "utf-8" });
  }
}

const result = readAndProcessFile("example.txt", new TxtFileReader())

console.log(result)