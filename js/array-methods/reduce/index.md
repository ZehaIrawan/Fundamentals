reduce() is a JavaScript array method used to boil down (reduce) all the values in an array into a single value — like a number, object, string, or even a new array.

Think of it like a snowball rolling through your array, collecting data along the way.

The order of parameters in reduce() absolutely matters.

```js
array.reduce((accumulator, currentValue, index, array) => {
  // do something
  return accumulator;
}, initialValue);
```

| Term           | Meaning                                                     |
| -------------- | ----------------------------------------------------------- |
| `accumulator`  | The total/result that's being built up                      |
| `currentValue` | The current item in the array during iteration              |
| `initialValue` | The starting value of the accumulator (required for safety) |

✅ Parameter Order (You Should Follow This):

1. accumulator – the value that carries over from each step

2. currentValue – the current item being processed

3. index (optional) – the index of currentValue

4. array (optional) – the full array being reduced

reduce() takes a callback function as an argument.

🧠 Let's break it down:
✅ reduce() = method
Built-in method on Array.prototype that expects two arguments:

A callback function – your custom logic to "reduce" the array.

An optional initial value.

✅ The callback function inside reduce() looks like this:
```js
(accumulator, currentValue, index, array) => {
  // your logic
  return updatedAccumulator;
}
```
This callback runs once per item in the array (from left to right).

Exactly 👍 — you nailed the pattern.

For **most array functions** in JavaScript (`map`, `forEach`, `filter`, `some`, `every`, etc.), the callback parameters follow this order:

👉 **VIA**: **Value, Index, Array**

---

### Examples

#### `map`

```js
[10, 20, 30].map((value, index, array) => {
  console.log(value, index, array);
  return value * 2;
});
```

#### `forEach`

```js
[10, 20, 30].forEach((value, index, array) => {
  console.log(value, index, array);
});
```

#### `filter`

```js
[1, 2, 3].filter((value, index, array) => value > 1);
```

So:

* **V** → Current element value
* **I** → Current index
* **A** → The array itself

---

### Special case: `reduce`

For `reduce`, it’s **AVIA**:

* `Accumulator` comes first (because the whole point is carrying the result forward).
* Then it follows the **VIA** pattern for the rest: `Value, Index, Array`.

---

✅ So your mnemonic is spot on:

* **VIA** for most array methods.
* **AVIA** for `reduce`.

---

Want me to make you a **quick comparison chart** (one glance table) of all major array methods with their callback parameter order, so you can memorize them once and for all?
