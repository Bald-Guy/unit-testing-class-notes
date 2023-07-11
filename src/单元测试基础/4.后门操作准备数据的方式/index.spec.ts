import { it, expect } from "vitest";
/**
 *  通过后门的方式准备测试数据
 *  概念: 调用非公开 API 的方式来准备测试数据
 *  缺点: 和业务代码的实现存在很大的耦合, 当业务代码细节发生变化时, 测试代码也需要跟着变化
 *       从而产生脆弱的测试
 *  实际开发中: 尽可能少用后门操作的方式, 优先使用 round-trip 的方式
 *            当一开始没有公开 API 用于准备测试数据的时候可以先用后门操作的方式将功能验证完，
 *            等后续实现完公开 API 之后，再回过头来进行重构
 */

// 业务代码
interface Todo {
  id: number;
  title: string;
  content: string;
}
const todos: Todo[] = [];
function removeTodo(id: number) {
  const index = todos.findIndex((todo) => todo.id === id);
  if(index !== -1) {
    todos.splice(index, 1);
  }
}

// 测试代码
it("remove todo", () => {
  // 此时业务代码中还没有实现 addTodo 方法, 但是我们可以通过后门的方式去添加数据
  const todo: Todo = {
    id: 1,
    title: "吃饭",
    content: "今天要和小明去吃饭",
  };
  todos.push(todo);

  removeTodo(1);

  expect(todos.length).toBe(0);
});
