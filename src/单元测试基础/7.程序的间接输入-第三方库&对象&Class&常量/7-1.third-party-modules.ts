import axios from "axios";

interface User {
  name: string;
  age: number;
}

export async function doubleUserAge(): Promise<number> {
//   const user: User = await axios("/users/001");
  const user: User = await axios.get("/users/001");
  return user.age * 2;
}
