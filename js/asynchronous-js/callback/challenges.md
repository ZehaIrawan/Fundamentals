Perfect 🔥 — here are **3 callback challenges** that reflect both **common interview questions** *and* **real-world use cases** you’ll actually face as a developer.

Each challenge builds your mental model step by step 👇

---

## ⚙️ **Challenge 1 – Basic Callback Flow**

### 🧩 Scenario:

You’re writing a small greeting function that should greet a user, then run another action.

```js
function greet(name, callback) {
  console.log(`Hello, ${name}!`)
  // now run the callback
}

greet("Zeha", () => console.log("Welcome to the app!"))
```

### 🧠 Your task:

1️⃣ Modify the code so the callback runs **after** the greeting.
2️⃣ Predict the output.
3️⃣ Try passing a *different* callback (like saving data or logging out).

💡 **Real-world use case:**

* This pattern happens in every library.
  For example:

  ```js
  button.addEventListener('click', callback)
  ```

  You define **what happens after** the event.

---

## ⏳ **Challenge 2 – Asynchronous Callback (setTimeout simulation)**

### 🧩 Scenario:

You’re simulating downloading user data from a server.

```js
function getUserData(callback) {
  console.log("Fetching user data...")
  setTimeout(() => {
    const user = { name: "Zeha", age: 25 }
    // now what?
  }, 2000)
}

getUserData(user => console.log("User:", user))
```

### 🧠 Your task:

1️⃣ Pass the `user` object into the callback.
2️⃣ Make it print the user after 2 seconds.
3️⃣ Add another callback call inside to simulate “fetch posts after user”.

💡 **Real-world use case:**

* Before Promises existed, APIs like `fs.readFile()` in Node.js used callbacks:

  ```js
  fs.readFile('data.txt', (err, data) => {
    if (err) throw err
    console.log(data)
  })
  ```

---

## 🔁 **Challenge 3 – Callback Hell (real async chain)**

### 🧩 Scenario:

You have 3 async steps:
1️⃣ Login user
2️⃣ Fetch their profile
3️⃣ Fetch their notifications

```js
function loginUser(callback) {
  setTimeout(() => {
    console.log("✅ User logged in")
    callback({ id: 1, username: "Zeha" })
  }, 1000)
}

function getProfile(user, callback) {
  setTimeout(() => {
    console.log(`📄 Fetched profile for ${user.username}`)
    callback({ ...user, bio: "Building SaaS 🚀" })
  }, 1000)
}

function getNotifications(profile, callback) {
  setTimeout(() => {
    console.log(`🔔 Notifications for ${profile.username}`)
    callback(["New message", "System update"])
  }, 1000)
}

// now chain them
loginUser(/* what goes here? */)
```

### 🧠 Your task:

1️⃣ Chain all 3 functions using callbacks.
2️⃣ Print final notifications.
3️⃣ Notice how it gets deeply nested (that’s callback hell).

💡 **Real-world use case:**

* This is how early Node.js apps handled async workflows before Promises:
  database queries, file reads, and API calls were all nested like this.

---

## 🧭 TL;DR

| Challenge  | Concept                    | Real-world analogy                                |
| ---------- | -------------------------- | ------------------------------------------------- |
| 1️⃣ Basic  | Passing a function         | Button click event, success callbacks             |
| 2️⃣ Async  | setTimeout, async response | Fetching data, I/O operations                     |
| 3️⃣ Nested | Callback hell              | Login → fetch profile → fetch notifications chain |

---

Would you like me to show you the **answers + Promise version** of these challenges next, so you can see exactly how callbacks evolved into Promises?
