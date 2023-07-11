import { userAge, fetchUserAge } from "./user";

export function doubleUserAge() {
  return userAge() * 2;
}

export async function fetchDoubleUserAge(): Promise<number> {
  const age = await fetchUserAge();
  return age * 2;
}
