import { readFileSync } from "fs";
/* 
依赖注入（Dependency Injection，简称DI）是一种设计模式，它可以帮助开发者建立更具可测试性、可维护性和松耦合性的软件系统。这种模式允许将一个对象的依赖关系（即该对象所需的其他对象）通过构造函数或者属性的方式注入，而不是由对象自行创建。

为什么需要依赖注入？

解耦：依赖注入减少了代码之间的硬依赖，使得组件之间更加独立。当一个对象需要更改时，它不会影响到其他依赖于它的对象。

可测试性：通过依赖注入，可以将测试桩（stub）或模拟对象（mock）注入到被测试对象中，这样就可以在不涉及其他类或外部资源的情况下进行单元测试。

代码复用：可以通过注入不同的实现来复用具有相同接口的组件。 
*/

/* 
export function readAndProcessFile(filePath: string): string {
  const content: string = readFileSync(filePath, {encoding: "utf-8"});
  // 在实际的场景中处理文件内容的过程会更复杂, 这里作简化处理, 方便理解
  return content + "-> test unit";
} 
*/

// 改造之后
export interface FileReader {
  read(filePath: string): string;
}
export function readAndProcessFile(filePath: string, fileReader: FileReader): string {
  const content = fileReader.read(filePath);

  return content + "-> test unit";
}
