// let rename = (a, b) => {
//   return a + b;
// };

function add(a, b) {
  return a + b;
}

function greeting(something) {
  return `Hello ${something}`;
}

let headerOne = document.querySelector(".header");
headerOne.innerText = add(1, 8);
