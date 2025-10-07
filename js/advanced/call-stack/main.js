// ## 🧩 **1. Stack Order Prediction**

//**Goal:** visualize how the stack grows and shrinks.

function first() {
  console.log("First start")
  second()
  console.log("First end")
}

function second() {
  console.log("Second start")
  third()
  console.log("Second end")
}

function third() {
  console.log("Third")
}

first()

// Write down the exact order of console logs and explain why each one runs when it does.



//🧱 2. Stack Overflow

//Goal: understand recursion limits.

// function recurse(n) {
//   console.log(n)
//   return recurse(n + 1)
// }

// recurse(1)

// 🧠 Challenge:
// 1. What error appears?
// 2. Why does it happen?
// 3. How could you rewrite it to avoid stack overflow but still count infinitely (hint: use setTimeout)?

