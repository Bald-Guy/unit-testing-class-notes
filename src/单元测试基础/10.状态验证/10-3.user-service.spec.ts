import { describe, it, expect } from "vitest";
import { Database } from "./database";
import { UserService } from "./10-3.user-service";

describe("user service", () => {
  it("create user", () => {
    const database = new Database();
    const userService = new UserService(database);

    const user = userService.createUser("Tom");

    // expect(database.getUser(user.id)?.name).toBe("Tom");
    expect(userService.findUser(user.id)?.name).toBe("Tom")
  });
});
