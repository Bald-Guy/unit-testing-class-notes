// process.env
// vite webpack import.meta.env
export function doubleUserAgeByProcess() {
  return Number(process.env.USER_AGE) * 2;
}
