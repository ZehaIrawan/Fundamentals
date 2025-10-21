# Arrow functions can return implicitly

When you use an arrow function without {},
the value after the arrow is automatically returned.

Arrow functions don’t have their own this

```js
const add = (a, b) => a + b
// same as:
const add = (a, b) => { return a + b }
```

.filter() expects your callback to return a boolean (true or false) —
something that decides whether to keep the element.

But your code returns u.name, which is a string, not a boolean.

| Method       | Callback should return       | Purpose / What it produces          | Common Output                    |
| ------------ | ---------------------------- | ----------------------------------- | -------------------------------- |
| `.forEach()` | nothing (no return)          | Run code on each item               | `undefined`                      |
| `.map()`     | transformed value            | Create a new array (same length)    | New array                        |
| `.filter()`  | `true` / `false`             | Keep only items that pass condition | New (smaller) array              |
| `.find()`    | `true` / `false`             | Find *first* matching item          | Single item or `undefined`       |
| `.some()`    | `true` / `false`             | Check if *any* item matches         | Boolean                          |
| `.every()`   | `true` / `false`             | Check if *all* items match          | Boolean                          |
| `.reduce()`  | The *next accumulator value* | Accumulate into one result          | Single value (sum, object, etc.) |