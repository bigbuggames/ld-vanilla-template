import { getExampleDOM } from "./bar/bar";

// Appending multiple elements
const main = document.createElement("div");

for (let x = 0; x < 10; x++) {
  console.log("iteration", x);
  main.appendChild(getExampleDOM());
}

document.body.appendChild(main);
