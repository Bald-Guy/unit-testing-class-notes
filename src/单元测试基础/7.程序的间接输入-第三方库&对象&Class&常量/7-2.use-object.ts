import { config } from "./config";

export function tellAge() {
  if (config.allowTellAge) {
    return 18;
  }

  return "年龄保密";
}

export function tellByFunction() {
  return config.getAge() === 18 ? "Yes" : "No";
}
