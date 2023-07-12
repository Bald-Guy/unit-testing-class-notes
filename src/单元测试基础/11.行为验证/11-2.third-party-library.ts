// 假设这个user是实际开发中引用的第三方库
// IDE 中会爆红, 不同理会
import { userLogin } from "user";

const state = {
  tipString: "",
};

export function login(username: string, password: string) {
  userLogin(username, password);
}

export function loginV2(username: string, password: string) {
  const isLogin = userLogin(username, password);

  if (isLogin) {
    state.tipString = "登录成功啦";
  }
}

export function getTip() {
  return state.tipString;
}
