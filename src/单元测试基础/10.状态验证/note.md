# 状态验证
## 什么是状态?
当前系统的属性或者数据结构
把系统当作状态机, 用户的操作会改变系统的状态, 状态验证就是验证用户的操作之后的状态机中的状态是否如预期一样

状态验证的特点是黑盒: 不关注实现状态改变的细节, 只关注状态改变之后的结果
这样带来的好处是不用因为修改了实现细节就得修改测试用例

## 状态验证的两种场景
### 状态在系统内部
如何验证私有的状态: 通过创建 API 进行暴露
### 状态在系统外部