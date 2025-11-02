Got you. Here are **5 challenges** that are *practical* and force you to reason about **Execution Context + Scope Chain** — not just textbook stuff.

Each challenge has:

* ✅ Problem
* 🧠 What concept it tests
* ✍️ Your task (no answer yet — you solve)

---

## **Challenge 1 — Why does `count` not reset?**

```js
function createCounter() {
  let count = 0
  return function() {
    count++
    console.log(count)
  }
}

const counterA = createCounter()
counterA()
counterA()

const counterB = createCounter()
counterB()
```

### 🧠 Tests

* Lexical scope
* Closure capturing variables
* Separate execution contexts

### ✍️ Task

Explain **why `counterA` and `counterB` do not share the same `count`.**
Where is `count` stored?

---

## **Challenge 2 — Which `message` prints?**

```js
const message = "Global"

function showMessage() {
  const message = "Local"
  console.log(message)
}

showMessage()
console.log(message)
```

### 🧠 Tests

* Scope chain lookup
* Shadowing variables

### ✍️ Task

Explain step-by-step how JavaScript **resolves which `message` to print**.

---

## **Challenge 3 — Why is `user` printed as undefined?**

```js
var user = "Admin"

function login() {
  console.log(user)
  var user = "Guest"
}

login()
```

### 🧠 Tests

* Variable Hoisting
* Temporal initialization vs default initialization
* Execution Context creation phase

### ✍️ Task

Explain **why the first log prints `undefined` instead of `"Admin"`**.

(Hint: **hoisting** places `var user` in the local scope before execution.)

---

## **Challenge 4 — Private Data in Real Apps (Storage Example)**

```js
function createStorage(key) {
  let value = localStorage.getItem(key)

  return {
    get() {
      return value
    },
    set(newValue) {
      value = newValue
      localStorage.setItem(key, newValue)
    }
  }
}

const themeStore = createStorage("theme")
themeStore.set("dark")
console.log(themeStore.get())
```

### 🧠 Tests

* Closures in real-world state management
* Private variables without classes

### ✍️ Task

Explain **why `value` cannot be accessed directly outside `createStorage`.**
Where is it stored after the function returns?

---

## **Challenge 5 — Loop + Async Trap**

```js
for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log("Timer:", i)
  }, 1000)
}
```

Output:

```
Timer: 4
Timer: 4
Timer: 4
```

### 🧠 Tests

* `var` scope (function-scoped)
* Shared closure over the same variable
* Event loop timing

### ✍️ Task

Explain why all timers log `4` instead of `1, 2, 3`.
Then fix using either:

* `let`
* IIFE
* or closure

Example fix:

```js
for (let i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000)
}
```

---

## 🎯 Your Goal Now

For each challenge, answer:

1. **Where is the variable stored?**
2. **Which execution context creates it?**
3. **How the scope chain resolves it?**

