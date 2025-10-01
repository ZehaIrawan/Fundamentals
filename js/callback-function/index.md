### What is a callback function?

A **callback** is simply:

> A function that you **pass as an argument** to another function, and that other function will **call (or invoke) it** at the right time.

So in `reduce`, *you* don’t call the function directly — `reduce` does it for you, once per element of the array.

---

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

Would you like me to also show the **equivalent version of reduce written out with a `for` loop**, so you can see exactly how the callback fits into the logic?
