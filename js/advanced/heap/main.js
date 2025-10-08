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

