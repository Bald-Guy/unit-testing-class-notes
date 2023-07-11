import {test, it} from 'vitest'
/**
 * test 和 it
 *  相同点：都是创建测试实例
 *  不同点：
 *      - it
 *          it → 来自 BDD 行为驱动开发，是在 TDD 的基础之上进延伸和扩展
 *          BDD 要求开发人员按照规范去描述测试行为：it should xxx xxx
 *      - test
 *          来源于 Jest
 *          同时也支持 it
 *          it 和 test 没有谁好谁坏，只是一个风格问题，开发测试选用其中一种就行，不要混用
 * Vitest 既支持 it 也支持 test
 */
test('should', () => {})
it('should', () => {})