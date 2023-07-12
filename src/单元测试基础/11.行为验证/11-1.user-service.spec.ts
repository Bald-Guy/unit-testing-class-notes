import { vi, it, expect, describe } from "vitest";
import { UserService } from "../10.状态验证/10-3.user-service";
import { Database } from "../10.状态验证/database";

describe("user service", () => {
  it("should create user", () => {
    // setup
    const database = new Database();
    vi.spyOn(database, "addUser");
    // addUser.isCalled = false -> true
    console.log(database.addUser);

    const userService = new UserService(database);
    userService.createUser("Tom");

    expect(database.addUser).toBeCalled();
  });
  it("should create user", () => {
    // 第二种方式
    Database.prototype.addUser = vi.fn();
    const database = new Database();
    const userService = new UserService(database);
    userService.createUser("Tom");

    expect(database.addUser).toBeCalled();
  });
});
