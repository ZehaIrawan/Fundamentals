// 🚨 3 Common Event Loop Mistake Challenges

// Challenge 1 – setTimeout confusion
for (var i = 1; i <= 3; i++) {
  console.log(i,'i')
  setTimeout(() => console.log(i), 1000)
}
// What’s the output and why?
// ====


// Challenge 2 — “0ms” timeout isn’t immediate (blocking)
setTimeout(() => console.log("timer"), 0)

const start = Date.now()
while (Date.now() - start < 800) {} // simulate heavy work ~800ms

console.log("done")

// 1. What prints first: "timer" or "done" — and why?
// 2. How would you avoid blocking the UI while doing heavy work?
// ====

// Challenge 3 — Microtasks vs Macrotasks (ordering)
setTimeout(() => console.log("timeout"), 0)
Promise.resolve().then(() => console.log("promise"))
console.log("start")

// 1. Predict exact output order.
// 2. Explain why that order happens.

