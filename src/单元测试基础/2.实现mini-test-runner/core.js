// test it
// expect toBe
// test.only
// 提示是否通过/报错
// beforeAll beforeEach afterAll afterEach
// describe
// 自动执行所有的测试脚本 *.spec.js

const tests = [];
const onlys = [];
const beforeAlls = [];
const beforeEachs = [];
const afterAlls = [];
const afterEachs = [];
export function test(name, callback) {
  tests.push({ name, callback });
}

test.only = (name, callback) => {
  onlys.push({ name, callback });
};

export const it = test;

export function describe(name, callback) {
    callback();
}

export function expect(received) {
  return {
    toBe(expected) {
      if (received === expected) {
      } else {
        throw new Error(`expected:${expected} but received:${received}`);
      }
    },
    toEqual(expected) {
      if (received === expected) {
        return true
      }

      if (
        typeof received !== "object" ||
        received === null ||
        typeof expected !== "object" ||
        expected === null
      ) {
        throw new Error("not a object");
      }

      const receivedKeys = Object.keys(received);
      const expectedKeys = Object.keys(expected);

      if (receivedKeys.length !== expectedKeys.length) {
        throw new Error(`expected:${JSON.stringify(expected)} but received:${JSON.stringify(received)}`);
      }

      for (const key of receivedKeys) {
        if (
          !expectedKeys.includes(key) ||
          !toEqual(received[key], expected[key])
        ) {
          throw new Error(`expected:${JSON.stringify(expected)} but received:${JSON.stringify(received)}`);
        }
      }

      console.log("ok");
      return true;
    },
  };
}

export function beforeAll(callback) {
  beforeAlls.push(callback);
}

export function beforeEach(callback) {
  beforeEachs.push(callback);
}

export function afterAll(callback) {
  afterAlls.push(callback);
}

export function afterEach(callback) {
  afterEachs.push(callback);
}

export function run() {
  for (const beforeAllCallback of beforeAlls) {
    beforeAllCallback();
  }

  const suit = onlys.length > 0 ? onlys : tests;
  for (const test of suit) {
    for (const beforeEachCallback of beforeEachs) {
      beforeEachCallback();
    }

    try {
      test.callback();
      console.log(`ok: ${test.name}`);
    } catch (error) {
      console.log(`fail: ${error.message}`);
    }

    for (const afterEachCallback of afterEachs) {
      afterEachCallback();
    }
  }

  for (const afterAllCallback of afterAlls) {
    afterAllCallback();
  }
}
