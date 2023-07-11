import { it, expect, describe, vi } from "vitest";
import { tellName } from "./7-4.use-variable";

// 这种方式会导致 config 中的其他变量被破坏
// vi.mock("./config", () => {
//   return {
//     name: "Tom",
//   };
// });

// 可以通过这种方式进行保留
vi.mock("./config", async (importOriginal) => {
  const config = await importOriginal();
  // 另一种通过 API 的方式, 不推荐
//   const config = await vi.importActual('./config')
  console.log(config);
  return {
    ...(config as any),
    name: "Tom",
  };
});

describe("使用变量的形式", () => {
  it("tell name", () => {
    const result = tellName();

    expect(result).toBe("Hi, my name is Tom");
  });
});
