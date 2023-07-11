export function doubleUserAgeByImport() {
  return Number(import.meta.env.VITE_USER_AGE) * 2;
}
