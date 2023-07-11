import {
  beforeAll,
  beforeEach,
  afterAll,
  afterEach,
  test,
  it,
  describe,
  expect,
} from "./core.js";

beforeAll(() => {
  console.log("before all");
});
beforeEach(() => {
  console.log("before each");
});
test("first test case", () => {
  console.log("first test case");
  expect(2).toBe(2);
});

// test.only("only test case", () => {
//   console.log("only test case");
// });
it("second test case", () => {
  console.log("second test case");
  expect(2).toBe(3);
});

it("third test case", () => {
  console.log("third test case");
  expect({ a: 1 }).toEqual({ b: 2 });
});

describe("sub", () => {
  test("sub: first test case", () => {
    console.log("sub: first test case");
    expect(2).toBe(2);
  });
});

afterAll(() => {
  console.log("after all");
});
afterEach(() => {
  console.log("after each");
});
