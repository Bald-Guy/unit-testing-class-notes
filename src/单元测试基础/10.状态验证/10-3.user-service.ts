import { Database, User } from "./database";
/**
 * 状态在SUT外部, SUT的依赖中
 * 在下面的场景中状态是在database里
 */
export class UserService {
  constructor(private database: Database) {}

  createUser(name: string): User {
    const id = Math.floor(Math.random() * 1000);
    const newUser: User = { id, name };
    this.database.addUser(newUser);
    return newUser;
  }

  findUser(id: number): User | undefined {
    return this.database.getUser(id)
  }
}
