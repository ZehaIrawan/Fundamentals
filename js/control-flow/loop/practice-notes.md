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

```js
let randomNumber;

function generateNumber(max,min){
  randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
}

// how to loop number
while (randomNumber !== 5) {
  generateNumber(10,1)
  console.log(randomNumber)
}
```
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

# 5. Ask the user for input once, and continue asking again **only** if the input is empty.


## My answer

Thinking process
1. whats node js method to input to terminal
2. how to avoid readline input always reexecuted

```js
let userInput = null

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});



readline.question('Who are you?', name => {
  while(!name) {
  }
  console.log(`Hey there ${name}!`);
  readline.close();
});
```

You’re close — main issue is:
- while loops don’t work with async I/O (like readline.question)
- The callback version of readline.question cannot "wait" before looping.
So you need to wrap readline.question inside a Promise and use await instead of while.

## Solution

### IIFE (Immediately Invoked Function Expression)

```js
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question) {
  return new Promise(resolve => {
    readline.question(question, answer => resolve(answer));
  });
}

(async function() {
  let name = "";

  while (!name) {
    name = await ask("Who are you? ");
    if (!name) {
      console.log("You must enter something. Try again.");
    }
  }

  console.log(`Hey there ${name}!`);
  readline.close();
})();
```

### 1 Use readline.promises (Built-in, cleanest in modern Node)

If you're on Node 17+, this is the best approach.
No IIFE needed. No custom ask() function.

# Module
[MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///Users/zehairawan/Project/Fundamentals/js/control-flow/loop/main.js is not specified and it doesn't parse as CommonJS.
Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
To eliminate this warning, add "type": "module" to /Users/zehairawan/Project/Fundamentals/js/package.json.

```js
import readline from 'readline/promises'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let name = "";

while (!name) {
  name = await rl.question("Who are you? ");
  if (!name) console.log("Please enter something.");
}

console.log(`Hey there ${name}!`);
rl.close();

```

# ESM
ReferenceError: require is not defined in ES module scope, you can use import instead