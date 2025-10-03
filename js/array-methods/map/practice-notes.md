🔁 Challenge 8: Parse Numbers

```js
const parse = strNumbers.map(s => parseInt(s))
```

⚠ This works, but parseInt has a radix gotcha with map because map passes (value, index).
So parseInt("2", 1) = NaN because radix 1 is invalid.

✅ Safer fix:

```js
const parse = strNumbers.map(s => Number(s))
// or
const parse = strNumbers.map(s => parseInt(s, 10))
```

Great catch 🙌 — this is one of those **tiny but important JavaScript nuances**.

When you do:

```js
const transform = colors.map(c => { color: c })
```

➡️ JS thinks the `{}` is a **function block**, not an object literal.
So it interprets this as:

```js
(c) => {
  color: c   // <-- a label (like goto), not an object property
}
```

That means it **doesn’t return anything**, so you’d just get an array of `undefined`.

---

### ✅ Fix: Wrap the object in parentheses

```js
const transform = colors.map(c => ({ color: c }))
```

* The parentheses `()` tell JS:
  “This `{}` is an **object literal**, not a block.”

So each iteration correctly returns `{ color: "red" }`, `{ color: "green" }`, etc.

---

⚡ Rule of thumb:

* **Arrow function returning an object directly → wrap in `()`**
* Otherwise, JS thinks `{}` starts a block of statements.

---

Do you want me to give you a **mini cheat-sheet**:
👉 when to use `()` in arrow functions (objects, multiline, implicit return, etc.)?


Perfect 👍 let’s make you a **cheat-sheet for arrow functions and parentheses**.
This is one of the most common “why is my code returning `undefined`?” bugs in JS.

---

# 📝 Arrow Function + Parentheses Cheat-Sheet

## 1. **Single Expression → No braces needed**

```js
const double = n => n * 2   // ✅ implicit return
```

* No `{}` means whatever is after `=>` is automatically returned.
* Works for simple expressions (math, string template, function calls).

---

## 2. **Returning an Object → NEED parentheses `()`**

```js
const obj = () => ({ key: "value" })  // ✅ object literal
```

Without `()`, JS thinks `{}` starts a block:

```js
const obj = () => { key: "value" }    // ❌ undefined
```

---

## 3. **Multi-line function body → Use `{}` and `return`**

```js
const add = (a, b) => {
  const sum = a + b
  return sum   // ✅ must explicitly return
}
```

If you forget `return`, it gives `undefined`.

---

## 4. **Returning Arrays → No parentheses needed**

```js
const arr = () => [1, 2, 3]  // ✅ fine
```

JS knows `[]` is an array, not a block.

---

## 5. **Returning Immediately-Invoked Expressions**

Sometimes you want to run an expression right away and return it:

```js
const greet = () => (console.log("Hi"), "done")
// Parentheses let you group things cleanly
```

---

## 6. **When to always add `()` around params**

* Zero params → `() => ...`
* One param → `n => n * 2` (no `()` needed)
* Multiple params → `(a, b) => a + b`

---

⚡ **Quick heuristics:**

* Returning **object literal?** → `({})`
* Returning **array, string, number, or variable?** → no need
* Writing **more than 1 line?** → use `{}` + `return`

---

Would you like me to turn this into a **set of small “gotcha” challenges** (like you did with `map`) so you can practice spotting when you need `()` and when you don’t?


Great question 🙌 — this is one of the *classic pitfalls* with `map()` and `parseInt`.
Let’s unpack it slowly and carefully:

---

# ⚠ Why `parseInt` breaks inside `map`

```js
const strNumbers = ["1", "2", "3"];
const parse = strNumbers.map(parseInt);
```

At first glance, you might think:

* `map()` gives each string to `parseInt`
* So it should return `[1, 2, 3]` ✅

But instead you get:

```js
[1, NaN, NaN]
```

---

## 🔍 What actually happens

* `map` calls its callback with **three arguments**: `(value, index, array)`.
* So when you do `map(parseInt)` → `parseInt` receives:

  * `("1", 0)` → `parseInt("1", 0)` → radix `0` = auto-detect → `1`
  * `("2", 1)` → `parseInt("2", 1)` → radix `1` ❌ invalid → `NaN`
  * `("3", 2)` → `parseInt("3", 2)` → radix `2` → binary → invalid digit `3` → `NaN`

That’s why it breaks.

---

## ✅ Correct fixes

### 1. Explicit radix

```js
const parse = strNumbers.map(s => parseInt(s, 10));
// [1, 2, 3]
```

Here you control the radix (decimal). Always safer when using `parseInt`.

---

### 2. Use `Number()` constructor

```js
const parse = strNumbers.map(s => Number(s));
// [1, 2, 3]
```

* `Number()` is cleaner if you just want conversion.
* It converts entire string → number (or `NaN` if invalid).
* Doesn’t care about radix, no extra argument, no hidden trap.

Examples:

```js
Number("42")   // 42
Number(" 42 ") // 42 (trims spaces)
Number("42px") // NaN  (whole string must be numeric)
```

---

## 🆚 When to use `parseInt` vs `Number`

### ✅ Use **`Number`** when:

* You want **full-string conversion** to a number.
* Typical case: converting user input `"123"` into `123`.
* Safer with `map`.

### ✅ Use **`parseInt`** when:

* You want to parse until a **non-digit** and stop there.

```js
parseInt("42px", 10) // 42
Number("42px")       // NaN
```

* You want to parse **hex, binary, octal, etc.**

```js
parseInt("1010", 2) // 10 (binary)
parseInt("FF", 16)  // 255 (hex)
```

---

## ⚡ Rule of thumb

* **Don’t use `map(parseInt)`** (bug trap).
* For normal numbers → use `Number(s)`.
* For special bases or mixed text → use `parseInt(s, radix)`.

---

👉 Do you want me to also give you a **cheat-sheet of string → number conversions** in JS (`Number`, `parseInt`, `parseFloat`, unary `+`, etc.) so you see all the differences at a glance?


⚠ Why parseInt sometimes bites you

Radix confusion
Historically, parseInt("08") returned 0 in some browsers (because it thought radix 8).
That’s why people say “always pass a radix!” → parseInt("08", 10).

map(parseInt) trap
As you saw, map passes (value, index) and the index becomes the radix accidentally.

🧩 Modern rule of thumb

Use Number() or + when you want strict conversion.

Use parseInt(str, radix) when:

The string may contain extra junk ("12px")

You want bases other than 10