import { env } from "./env";

// fetch example
const test = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json = await res.json();
  console.log(json);
};

// remember to create a .env file from .env.example
console.log(env.TEST);

test();
