import { Elysia } from "elysia";

const app = new Elysia().get("/", () => "Hello World!")
  .get("/calculate/:id", ({params: {id}}) => {
    const n: number | undefined = Number(id);

    if (typeof n === "undefined" || isNaN(n)) {
      return "not a number"
    }

    let result: number = 0;
    for (let i = 0; i < n; i++){
      result = result + i
    }
    return result
}).listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
