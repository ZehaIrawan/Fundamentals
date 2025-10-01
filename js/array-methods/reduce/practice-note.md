# 🔁 Challenge 2: Flatten an Array

- Mistake 1
Should have used spread operator to copy the array items

- Mistake 2
Uses return acc.push(...arr);
Instead of two lines
  acc.push(...arr)
  return acc

🧠 What does Array.prototype.push() return?
push(...items) adds elements to an array, but returns the new length of the array, not the array itself.

- Mistake 3
Doesn't give starting value

Turns out If you don’t provide an initial value, JS takes the first element of the array as the initial accumulator.


- Mistake 4
Doesnt wrap params in parantheses

Notice the parentheses around (acc, num) => ....
That makes it a function with parameters acc and num. It's called inline/anonymous function

Inline (anonymous) arrow function
```js
const val = numbers.reduce((acc, num) => acc + num, 0)
```

Named function (defined separately)
```js
function sum(acc, num) {
  return acc + num;
}
const val = numbers.reduce(sum, 0);
```