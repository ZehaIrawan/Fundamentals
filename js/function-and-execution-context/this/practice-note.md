
## 🧩 **Challenge 1 – Object Method**

### My answer
```js
const greetFn = user.greet
greetFn.bind(user)
greetFn() // ❓ what happens here?
```

It failed because .bind() does not mutate the original function.
It returns a new version with a permanently fixed this.

=> .bind() makes a new function where this is permanently set to the object you choose.

Correct
```js
const greetFn = user.greet.bind(user)
greetFn() // ❓ what happens here?
```

// this belong to the greet function
// which is undefined
// binding should happen before the call