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
// (Tip: draw boxes for each function call to see the stack push/pop.)

// First start
// Second start
// Third
// Second end
// First end