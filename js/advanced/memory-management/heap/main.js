// 💪 Challenges: Mastering the Heap
// 🧩 Challenge 1 — Identify what goes where

// Predict which variables go to stack or heap:

// const a = 10;
// const b = "Hello";
// const c = { name: "Zeha" };
// const d = [1, 2, 3];
// const e = function() { return "hi" };

// Q: Which are in the stack? Which live in the heap?


// 🔁 Challenge 2 — Reference vs Copy
let a = { score: 10 };
let b = a;
b.score = 20;
console.log(a.score); // ?

// Q: Why did changing b affect a?

// 🧱 Challenge 3 — Garbage Collection

// Predict what gets collected:
function createUser() {
  const user = { name: "Zeha" };
  return user;
}
let u1 = createUser();
u1 = null;

// Q: When does the object { name: "Zeha" } get cleaned from the heap?

// ======
// ======

// 🌀 Challenge 4 — Closure keeps heap alive
function outer() {
  const data = { secret: 42 };
  return function inner() {
    console.log(data.secret);
  };
}
const fn = outer();

// Q: Why doesn’t { secret: 42 } get garbage collected?




// https://chatgpt.com/c/68deff22-4d34-8323-9e0e-d7e568aae1a8