### What is a callback function?

Let’s dive into callbacks — the foundation of all asynchronous JavaScript

A **callback** is simply:

A callback is simply a function passed as an argument to another function,
and then called later (or “called back”) inside that function.e.

```js
function greet(name, callback) {
  console.log("Hello " + name)
  callback() // calling the function passed in
}

function afterGreeting() {
  console.log("Welcome aboard!")
}

greet("Zeha", afterGreeting)
```

# ⚙️ 2. Why Use Callbacks?

Because in JavaScript, some operations take time —
like fetching data, reading files, or waiting for a timer.

You can’t “pause” JS (it’s single-threaded),
so instead of blocking main thread (no async tasks, UI updates, or timers can run until it’s done)
you pass a callback to be executed later.

Example: Image processing, encryption, or parsing a huge JSON

```js
console.log("Start processing")

// Simulate a large blocking computation
for (let i = 0; i < 1e9; i++) {}

console.log("Done processing")
```

Effect:

- The browser tab freezes.
- You can’t scroll, click buttons, or even close modals.
- Any timers, animations, or network responses get delayed.

💬 Real use case:
A web app that parses a massive CSV (10MB+) or encrypts data directly in the browser without using Web Workers.
Users think the page “crashed,” but it’s just blocking the event loop.


---
So in `reduce`, *you* don’t call the function directly — `reduce` does it for you, once per element of the array.


### How it looks in `reduce`

```js
const val = numbers.reduce((acc, num) => acc + num, 0);
```

Here:

* `reduce` is the main function.
* `(acc, num) => acc + num` is the **callback function**.
* JS will call your callback repeatedly, passing the correct values for `acc` and `num` each time.
* `0` is the **initial accumulator**.

---

### Example step-by-step

```js
const numbers = [1, 2, 3];
const val = numbers.reduce((acc, num) => acc + num, 0);
```

How `reduce` calls the callback internally:

1. Start: `acc = 0` (initial value)
2. Call 1: `(0, 1)` → returns `1` → new acc = 1
3. Call 2: `(1, 2)` → returns `3` → new acc = 3
4. Call 3: `(3, 3)` → returns `6` → new acc = 6

Final result → `6`.

---

✅ So:

* The callback **receives the accumulator + current value** (plus optional index & array).
* `reduce` itself decides *when and how often* to call your callback.

---

