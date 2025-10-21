Perfect 👏 You’re now ready for hands-on **arrow-function skill tests**.
Here are **3 practical challenges** that reflect how developers actually use arrow functions in the real world — with one concept focus per challenge.

---

## 🧩 **Challenge 1 – Array Methods Callback**

**Goal:** Practice arrow functions as *short callbacks*.

```js
const users = [
  { name: "Zeha", active: true },
  { name: "Dinda", active: false },
  { name: "Ari", active: true }
]

// 👉 Using map / filter / forEach with arrow functions
// 1️⃣ Get only active users' names.
// 2️⃣ Log: ["Zeha", "Ari"]
```

**Hint:**
Use `.filter()` and `.map()` in one chain:
`users.filter(...).map(...)`

💡 *Real-world use:* data transformation (React list rendering, API responses).

---

## ⚙️ **Challenge 2 – Lexical `this` Behavior**

**Goal:** Understand that arrow functions *don’t have their own `this`*.

```js
const counter = {
  count: 0,
  start: function () {
    setInterval(function () {
      this.count++
      console.log(this.count)
    }, 1000)
  }
}
counter.start()
```

**Your tasks:**
1️⃣ Observe the output — does `this.count` work?
2️⃣ Fix it **using an arrow function** so `this` refers to the `counter` object.

💡 *Real-world use:* event handlers, class methods, React components — where `this` often confuses people.

---

## 🔁 **Challenge 3 – Returning Values vs Implicit Return**

**Goal:** Know when to use parentheses vs braces in arrow syntax.

```js
// 1️⃣ Create an arrow function double that doubles a number
// 2️⃣ Make one version with implicit return
// 3️⃣ Make another with explicit return

// Example outputs:
console.log(double(4)) // 8
```

Then extend:

```js
// 4️⃣ Create add = (a,b) => ?
// 5️⃣ Create makeUser = (name, age) => ?
// Should return { name, age }
```

💡 *Real-world use:* returning JSX in React or object literals in utility functions.

---

### ✅ **Summary Table**

| Challenge           | Concept Tested               | Real-World Parallel                   |
| ------------------- | ---------------------------- | ------------------------------------- |
| 1️⃣ Array Methods   | Short inline arrow callbacks | Transforming arrays, mapping API data |
| 2️⃣ Lexical `this`  | Arrow `this` binding         | Event handlers, React methods         |
| 3️⃣ Implicit Return | Syntax precision             | Returning objects / JSX               |

---

Would you like me to show **the full solutions + reasoning** for these three next (so you can self-check and learn the subtle rules like object literal parentheses)?
