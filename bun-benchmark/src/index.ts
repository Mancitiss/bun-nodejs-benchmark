import { Elysia } from "elysia";

const calculate: Function = (n: number) => { if (n <= 0) return 0; return n + calculate(n - 1); };

const app = new Elysia().get("/", () => "Hello World!")
  .get("/calculate/:id", ({ params: { id } } : { params: any}) => {
    const n: number | undefined = Number(id);

    if (typeof n === "undefined" || isNaN(n)) {
      return "not a number"
    }

    let result: number = 0;
    for (let i = 0; i < n; i++) {
      result = result + i
    }
    return result
  }).get("/calculate2/:id", ({ params: { id } } : {params: any}) => {
    const n: number | undefined = Number(id);

    if (typeof n === "undefined" || isNaN(n)) {
      return "not a number"
    }

    return calculate(n)
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
