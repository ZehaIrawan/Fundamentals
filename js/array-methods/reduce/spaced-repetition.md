```js
const numbers = [10, 20, 30];
// Goal: Use reduce to return the sum: 60

const total = numbers.reduce(acc, num => acc + num,0)

// ReferenceError: acc is not defined
```

1. Wrong argument order
You wrote:

```js
reduce(acc, (num) => {...}, 0)
```

But the correct syntax for reduce() is:

```js
array.reduce((acc, curr) => { ... }, initialValue)
```

In your code:

acc is being passed as a variable (which probably doesn’t exist)

(num) => {} is the callback, but acc should be inside that function