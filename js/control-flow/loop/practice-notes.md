1. Print every element in this array:

```js
const names = ["Zeha", "Rizky", "Tama"];
```
Answer

```js
for(i in names){
  console.log(names[i])
}

// or cleaner
for(name of names){
  console.log(name)
}
```

=> Correct but ⚠️ for...in is NOT recommended for arrays

Why:
for...in loops indexes and can also pick up unexpected properties if the array is extended or modified.

- For in => index, Objects & Arrays
- For of => value, Iterables (Array, String, Map, Set, NodeList, etc.)

Let’s show a real example where an array is modified / extended and for...in behaves incorrectly.

Example 1 — Custom Property Added to Array
Example 2 — Prototype Modified (Happens in Some Libraries)
Example 3 — "Sparse" Array (Missing Indexes)


Objects → enumerable, but NOT iterable
Arrays → iterable AND enumerable

If you want to loop object values, convert it first:

```js

for (const value of Object.values(obj))
for (const key of Object.keys(obj))
for (const [key, value] of Object.entries(obj))
```

I think `name` is reserved keyword in JS

2. Print every key and value in this object:

```js

const profile = { username: "zeha", level: 7, premium: true };

// answer
for(i in profile){
  console.log(`${i} : ${profile[i]}`)
}
```

Better to declare variable for i, like const or let.

modern codebase sometime use

```js
for (const [key, value] of Object.entries(profile)) {
  console.log(key, value);
}
```

# 3. Print numbers from 1 to 50, but stop the loop when the number reaches 23.

My answer
```js
for(let i = 0;i <= 50;i++){
  console.log(i)
  if(i === 26) break
}
```

Mistake
- start from 0 instead of 1
- stop at 26 instead of 23

# 4. Keep generating a random number (1–10) until the number equals 5. Print each generated number.


let randomNumber;

function generateNumber(max,min){
  randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
}

// how to loop number
while (randomNumber !== 5) {
  generateNumber(10,1)
  console.log(randomNumber)
}

// Math.round is bad idea
// need to use math floor and math random

// Math.random()         → random decimal (0 to <1)
// * (max - min + 1)     → stretch to correct size
// Math.floor(...)       → remove decimals (get whole numbers)
// + min                 → shift to start at min


Your logic is almost correct, but there is one bug:

randomNumber is never assigned before the while check,
so the loop condition checks:

while (undefined !== 5)  // true


Meaning it runs — but the first random number isn't generated until inside the loop.

To fix: generate once before entering the loop.