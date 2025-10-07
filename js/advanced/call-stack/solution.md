# 1. Stack Order Prediction

First start
Second start
Third
Second end
First end

# 2. Stack Overflow

1. Maximum call stack size exceeded
2. Each recursive call to recurse(n + 1) pushes a new stack frame. There’s no base case, so frames never get popped. The call stack has a finite size → it overflows.
3. With setTimout or SetInterval

```js
function recurse(n) {
  console.log(n)
  setTimeout(()=> recurse(n + 1),0)
}

recurse(1)
```

Even though the delay is 0, it does not run immediately.
It means:

“Run this function after the current call stack is empty, as soon as possible.”