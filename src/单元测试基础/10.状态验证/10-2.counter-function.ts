/**
 * 状态在系统内部: 前端开发(Vue)场景, 大量函数式编程
 */

let count = 0;

export function increment() {
  count++;
}

export function getCount() {
  return count;
}

export function reset() {
  count = 0;
}
