export { default as fetchData } from "./fetchData";

export function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Map for Filter Handlers
export const filterHandlers: Map<string, (a: string, b: string) => boolean> =
  new Map([
    [
      "orgName",
      (a: string, b: string): boolean =>
        a.toLowerCase().includes(b.toLowerCase()),
    ],
    [
      "email",
      (a: string, b: string): boolean =>
        a.toLowerCase().includes(b.toLowerCase()),
    ],
    [
      "userName",
      (a: string, b: string): boolean =>
        a.toLowerCase().includes(b.toLowerCase()),
    ],
    [
      "createdAt",
      (a: string, b: string): boolean =>
        a.toLowerCase().includes(b.toLowerCase()),
    ],
    [
      "phoneNumber",
      (a: string, b: string): boolean =>
        a.toLowerCase().includes(b.toLowerCase()),
    ],
  ]);
