/**
 * 状态在系统内部, 传统 OOP 场景
 */
export class Counter {
  private count: number;
  constructor() {
    this.count = 0;
  }
  increment(): void {
    this.count++;
  }
  getCount() {
    return this.count;
  }
  reset() {
    this.count = 0
  }
}
