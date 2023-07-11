// 同步的方式获取数据
export function userAge() {
  return 18;
}

export function userName() {
  return "John";
}

// 异步的方式获取数据, 如: api.js
export function fetchUserAge(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(18);
    }, 0);
  });
}
