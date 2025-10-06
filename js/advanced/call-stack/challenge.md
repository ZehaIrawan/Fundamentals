Understanding the **call stack** is one of the biggest level-ups you can get in JavaScript.

Let’s turn it into **5 hands-on challenges**, each one forcing you to *think like the JS engine*.

---

## 🧩 **1. Stack Order Prediction**

**Goal:** visualize how the stack grows and shrinks.

```js
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
```

🧠 **Challenge:**
Write down the *exact order* of console logs **and explain why** each one runs when it does.
(*Tip: draw boxes for each function call to see the stack push/pop.*)

---

## 🧱 **2. Stack Overflow**

**Goal:** understand recursion limits.

```js
function recurse(n) {
  console.log(n)
  return recurse(n + 1)
}

recurse(1)
```

🧠 **Challenge:**

* What error appears?
* Why does it happen?
* How could you rewrite it to **avoid stack overflow** but still count infinitely (hint: use `setTimeout`)?

---

## 🔁 **3. Async & Call Stack Separation**

**Goal:** see how `setTimeout` leaves the stack.

```js
console.log("A")

setTimeout(() => console.log("B"), 0)

console.log("C")
```

🧠 **Challenge:**
Predict the order → why does “B” print last even with `0ms` delay?
(*Hint: because of event loop + task queue, not the stack itself.*)

---

## 🧠 **4. Stack Trace Reading**

**Goal:** learn to read errors like a pro.

```js
function a() { b() }
function b() { c() }
function c() { throw new Error("Boom!") }

a()
```

🧠 **Challenge:**
Run this and look at the error trace in DevTools or Node.

* Which function is on top of the stack?
* Which one called it?
* How can you trace execution backwards using the error log?

---

## ⚡ **5. Debugger Stack Walk**

**Goal:** see the stack in real time.

```js
function step1() { step2() }
function step2() { step3() }
function step3() {
  debugger
  console.log("End")
}

step1()
```

🧠 **Challenge:**

* Open DevTools → Sources → Run the script.
* When it pauses on `debugger`, inspect the **Call Stack panel**.
* Which function is at the top? bottom?
* Step through and watch frames pop off.

---

## 🎯 **Bonus Challenge**

Write your own **visual call stack simulator** in the console.

```js
const stack = []
function enter(fn) {
  stack.push(fn)
  console.log("→ Enter", fn, stack)
}
function exit() {
  const fn = stack.pop()
  console.log("← Exit", fn, stack)
}

function alpha() {
  enter("alpha")
  beta()
  exit()
}
function beta() {
  enter("beta")
  gamma()
  exit()
}
function gamma() {
  enter("gamma")
  exit()
}

alpha()
```

You’ll literally *see* how the stack grows and shrinks.

---

Would you like me to make a **single “call-stack-challenges.js” file** like your array/reduce/closure ones, with comments and blanks for you to fill in? It’s perfect for hands-on practice.
