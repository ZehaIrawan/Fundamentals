## 🔍 Your Answers Review

### 1. Hoisting & TDZ

> **Your answer:** `a`

Actual behavior:

```js
console.log(a)
let a = 10
```

➡️ This throws a **ReferenceError: Cannot access 'a' before initialization**

* `let` and `const` are **hoisted** but live in the **Temporal Dead Zone (TDZ)** until the declaration line.
* So you **can’t use `a` before the `let a = 10` line.**

👉 **Concept gap:**

* Hoisting
* TDZ
* Difference between `var` vs `let`/`const`

---

### 2. Closures / var vs let

> **Your fix:**

```js
for (let i = 0; i < 3; i++) {
  arr.push(() => console.log(i))
}
```

✅ This is correct.

* `let` creates a **new `i` per loop iteration**, so you get `0, 1, 2` as expected.
* With `var`, you’d get `3, 3, 3`.

👉 You’re **okay** here on the basic closure/use case. Advanced closure patterns might still be worth revisiting later, but this is solid.

---

### 5. Array methods (map/filter)

Original goal: rewrite this:

```js
const nums = [1,2,3,4,5]
const result = []

for (const n of nums) {
  if (n % 2 === 0) result.push(n * 10)
}
```

> **Your attempt:**

```js
const even = nums.filter(num => num % 2 === 0)
results.push(n * 10)
```

You’re **partially there**, but:

* You used `.filter` correctly to get even numbers ✅
* But you didn’t use `.map`, and `results.push(n*10)` is undefined (`n` isn’t defined there).

A proper version:

```js
const result = nums
  .filter(n => n % 2 === 0) // keep only even
  .map(n => n * 10)         // transform them
```

👉 **Concept gap:**

* Chaining `.filter` and `.map`
* Avoiding manual `push` when using functional style

---

### 6. Immutability & Spread

> **Your answers:**

```js
newUser = { ...user, age: 30 }
// or
newUser = { ...user }
newUser.age = 30
```

{ ...user, age: 30 }
The spread expands into:
{ name: "Zeha", age: 20, age: 30 }
And JS resolves duplicate keys by using the last occurrence, so age: 30 wins.

✅ Both valid and idiomatic.

* First version is more concise and common in React/modern JS.
* You clearly understand **spread** and **immutably updating** an object.

👉 This area is **good**.

---

### 7. Destructuring

> **Your solution:**

```js
const title = product.info.title
const price = product.info.price
```

✅ Correct, though not using destructuring.

A destructured version would be:

```js
const { info: { title, price } } = product
```

### Question
with this, info, title and price is becoming new variables, which they get the value from the format of the {}?

What this means:
- Look inside product
- Find the key info
- Inside info, extract the keys title and price
- Create new variables named title and price
- info: means Do NOT create a variable named info, because you're destructuring through it, not pulling it out.

Or destructure step-by-step (clearer):

const { info } = product;
const { title, price } = info;


👉 You **understand the data shape**, but could level up with **destructuring syntax**.

---

### 8. Optional Chaining & Nullish Coalescing

> **Your solution:**

```js
user.address?.street ?? "N/A"
```

✅ Perfect.

* Uses `?.` to safely access `street`
* Uses `??` to fallback to `"N/A"` if `undefined` or `null`

👉 This is **solid**.

---

### 10. Event loop (microtask vs macrotask)

Code:

```js
console.log("a")

setTimeout(() => console.log("b"), 0)

Promise.resolve().then(() => console.log("c"))

console.log("d")
```

> **Your answer:**
> `a`
> `d`
> `b`
> `c`

Correct order is:

1. `a`  (sync)
2. `d`  (sync)
3. `c`  (**Promise microtask**)
4. `b`  (**setTimeout macrotask**)

👉 **Concept gap:**

* Event loop
* Microtask queue (Promises) vs macrotask queue (`setTimeout`)

---

### You didn’t answer: 3, 4, 9

That’s already a signal:

* **3 → Promises & async/await & sequencing**
* **4 → Type coercion (`+`, `-`, `==`, `===`, weird cases)**
* **9 → Prototypes & classes (`function Car()`, `Car.prototype`, `class Car {}`)**

If you naturally skipped them, your brain kinda told us, “not confident here yet” 😄

---

## 📚 What You Should Learn Next (in order)

Based on your answers, here’s your **personal JS roadmap**:

### 1️⃣ Hoisting, TDZ, and `var` vs `let` vs `const`

Because question 1 was off.

* How hoisting works for:

  * `var` (initialized to `undefined`)
  * `let`/`const` (TDZ until declaration)
* Why `console.log(a)` before `let a = 10` throws

---

### 2️⃣ Event Loop, Microtasks & Macrotasks

Because question 10 was wrong.

* Execution order: sync → microtasks (Promises) → macrotasks (setTimeout)
* How this affects UI, React hooks, and async code.

---

### 3️⃣ Promises & Async/Await (Challenge 3)

You didn’t answer this one.

You should be comfortable with:

* Writing `async function runInOrder() { ... }`
* Running an array of async tasks **in sequence**, not parallel
* Difference between `Promise.all` vs `for...of await`

---

### 4️⃣ Type Coercion (Challenge 4)

You skipped this too.

Learn:

* What happens with:

  ```js
  1 + "2"      // "12"
  "10" - 2     // 8
  [] == 0      // true
  ```

* Rules of `==` vs `===`

* Why coercion bugs are common in real apps

---

### 5️⃣ Prototypes & Classes (Challenge 9)

Core JS, even if you mostly write React/TS.

Learn:

* How this works:

  ```js
  function Car(brand) {
    this.brand = brand
  }
  Car.prototype.honk = function () {}
  ```

* And rewrite it as:

  ```js
  class Car {
    constructor(brand) {
      this.brand = brand
    }
    honk() {
      console.log("beep")
    }
  }
  ```

---

### 6️⃣ Array methods & functional style (Polish)

You’re close, just need to tighten:

* Chaining `.filter().map().reduce()`
* Avoiding `push` when using functional style

---

## 🔧 Next Step (Actionable)

If you’re down, I can:

1. Give you **mini-lessons + 1–2 challenges each** for:

   * Hoisting/TDZ
   * Event loop
   * Promises sequencing
   * Coercion
   * Prototypes/classes

2. You try to solve them, and we iterate until all of these feel **“obvious”**.

If you want to start with just one, I’d say:
👉 **Let’s fix hoisting + TDZ first**, since it’s super foundational.

