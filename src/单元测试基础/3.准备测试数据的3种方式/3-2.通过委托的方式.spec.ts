import { it, expect } from "vitest";
/**
 *  通过委托(delegated)的方式准备测试数据
 *  概念: 通过工厂函数去创建数据
 *  解决:
 *      1. 代码重复的问题
 *      2. 可读性的问题
 *  进阶手法:
 *      1. 给工厂函数返回的数据对象中的属性设置默认值, 让不同的测试用例只需要关注自己的那部分
 *      2. 在测试用例中使用类似内联的方式修改数据
 *      3. 继续添加工厂函数对修改数据的逻辑进行继续封装
 *      4. 将工厂函数提取到单独的文件(helpers/todo.ts)中, 方便不同测试文件共享
 */

// 业务代码
interface Todo {
  title: string;
  content: string;
}
const todos: Todo[] = [];
function addTodo(todo: Todo) {
  todos.unshift(todo);
}

// 测试代码
// 工厂函数
function createTodo(title: string, content: string = "默认的todo内容"): Todo {
  return {
    title,
    content,
  };
}
it("add todo1", () => {
  // 委托工厂函数准备测试数据
  const todo = createTodo("吃饭");

  addTodo(todo);

  expect(todos[0]).toEqual(todo);
});
it("add todo2", () => {
  // 委托工厂函数准备测试数据
  const todo = createTodo("吃饭", "今天和小明去吃饭");

  addTodo(todo);

  expect(todos[0]).toEqual(todo);
});
it("add todo3", () => {
  // 委托工厂函数准备测试数据
  const todo = createTodo("吃饭");
  todo.content = "今天和妈妈去吃饭"

  addTodo(todo);

  expect(todos[0]).toEqual(todo);
});
