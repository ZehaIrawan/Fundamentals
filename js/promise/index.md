async/await is 100% built on top of Promises.
It’s not a separate system. It’s just syntax sugar that makes working with Promises easier to read and write.

```js
async function fn() {}
```


JavaScript automatically makes this function return a Promise, no matter what you return inside


When you write:

```js
await something
```

JavaScript is basically doing:

```js
something.then(...)
```

🧠 Under the hood

```js
async function getData() {
  const res = await fetch("/api");
  return res.json();
}
```

Is equivalent to:
```js
function getData() {
  return fetch("/api")
    .then(res => res.json())
}
```

A Promise = a container for a future value.
A promise is a special JavaScript object

1. pending → still working
2. fulfilled → success (resolve)
3. rejected → error (reject)

A Promise is not the value itself.
It’s a placeholder for the future value.


- Promise = future value container
- async/await is built on Promises
- .then() = old style, async/await = clean style
- Promise.all = parallel
- Promise.race = timeout pattern
- Promises run in microtask queue
- Most bugs come from not awaiting something

The new keyword in JavaScript is used to create a new object from a constructor function or class.

How class uses new under the hood

```js
class User {
  constructor(name) {
    this.name = name;
  }
}

const u = new User("Zeha");

// is the same as

function User(name) {
  this.name = name;
}

```