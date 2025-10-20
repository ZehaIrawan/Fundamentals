
## ⚙️ **Challenge 1 – Basic Callback Flow**

```js
function greet(name, callback,callback2) {
  console.log(`Hello, ${name}!`)
  callback()
  callback2(name)
}

function loadingData(name){
  console.log(`loading ${name}'s data`)
}

greet("Zeha", () => console.log("Welcome to the app!"),loadingData)
//
function greet(name, callback) {
  console.log(`Hello, ${name}!`)
  // now run the callback
  callback()
}

function savingData(){
  console.log('saving data')
}

greet("Zeha",savingData)
```

Your solution works 👍 (multiple callbacks + passing name).

Tiny improvements:

- Guard that callbacks are functions (safer API).
- Use meaningful names.

```js
function greet(name, onGreet, afterGreet) {
  console.log(`Hello, ${name}!`)
  if (typeof onGreet === 'function') onGreet()
  if (typeof afterGreet === 'function') afterGreet(name)
}
```


## ⏳ **Challenge 2 – Asynchronous Callback (setTimeout simulation)**

```js
function getUserData(callback,callback2) {
  console.log("Fetching user data...")
  setTimeout(() => {
    const user = { name: "Zeha", age: 25 }
    callback(user)
    callback2()
  }, 2000)
}

function fetchPosts(){
  console.log('fetch posts after user')
}

getUserData(user => console.log("User:", user),fetchPosts)
```

Your version is correct and prints user first, then “fetch posts”.
Two tweaks:
- Pass user into the second step (so it’s useful).
- Add basic error-first style (common in Node).

## 🔁 **Challenge 3 – Callback Hell (real async chain)**

```js
// 1. Wrong second solution
loginUser(getProfile(getNotifications()))

// 2. Correct solution
loginUser((user) => {
  getProfile(user, (profile) =>{
    getNotifications(profile, (message)=> console.log(message))
  })
})
```
doesn’t work because it calls getProfile and getNotifications immediately (and doesn’t pass the user/profile at the right time). You need to pass functions (callbacks) that run later with the result of the previous step.

### Minimal version
```js
loginUser(user => {
  getProfile(user, ()=>{})
})
```

🧩 What user => { ... } means

This is an arrow function — a shorter way to write a regular function in JavaScript.

It’s equivalent to:

```js
function(user) {
  // code here
}

// So when you see:

loginUser(user => {
  console.log(user)
})
// …it’s the same as writing:

loginUser(function(user) {
  console.log(user)
})
```

```js
loginUser((user) => {})

// is the same as
 loginUser(user => {})
```

⚙️ Why both work

This is part of arrow function syntax rules:

- If the function has one parameter, you can omit the parentheses.
- If it has zero or more than one parameter, you must use parentheses.

👉 You fully understand callbacks now — this is how old-style async code worked before Promises and async/await.

Would you like me to show you the same code rewritten using Promises, so you can see how it becomes cleaner and easier to read?