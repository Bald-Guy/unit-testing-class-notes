import {vi, it, expect} from 'vitest'
import { doubleUserAge, doubleInnerHeight } from './8-2.global-variable'

it("double user age", () => {
    vi.stubGlobal("user", {age: 2})

    const result = doubleUserAge()

    expect(result).toBe(4)
})

it("double inner height", () => {
    vi.stubGlobal("innerHeight", 100)

    const result = doubleInnerHeight()

    expect(result).toBe(200)
})