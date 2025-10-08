let a = { score: 10 };
let b = a;
b.score = 20;
console.log(a.score); // ?

<!-- 20 -->
```js
let b = a;
```

You are not copying the object — you’re copying the reference (a pointer to the same heap memory).

So both a and b now point to the same object in the heap.