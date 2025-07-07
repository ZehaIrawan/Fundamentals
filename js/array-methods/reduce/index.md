reduce() is a JavaScript array method used to boil down (reduce) all the values in an array into a single value — like a number, object, string, or even a new array.

Think of it like a snowball rolling through your array, collecting data along the way.

The order of parameters in reduce() absolutely matters.

Here’s the standard order inside the reducer function:

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