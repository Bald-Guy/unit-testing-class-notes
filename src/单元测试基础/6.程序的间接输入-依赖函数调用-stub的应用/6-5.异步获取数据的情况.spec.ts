import { vi, it, expect } from "vitest";
import { fetchDoubleUserAge } from "./index";

vi.mock("./user", () => {
  return {
    fetchUserAge: () => Promise.resolve(2),
  };
});

it("first", async () => {
  const result = await fetchDoubleUserAge();

  expect(result).toBe(4);
});
