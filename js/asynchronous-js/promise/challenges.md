Got you — here are **3 high-signal Promise challenges** that cover **real-world, senior-level use cases** (parallel, sequential, and error handling).

Each challenge is **practical** enough that it comes up in real projects.

---

## **Challenge 1 — Run Promises in Parallel**

You have a function that fetches data for multiple URLs:

```js
async function fetchData(url) {
  const res = await fetch(url)
  return res.json()
}
```

### **Task:**

Given an array of URLs:

```js
const urls = [
  "/api/user",
  "/api/posts",
  "/api/notifications",
]
```

**Write code to fetch all of them in parallel** and return the array of results.

### **Expected Output:**

```js
;[
  { user: ... },
  { posts: ... },
  { notifications: ... }
]
```

---

## **Challenge 2 — Run Promises Sequentially**

You have:

```js
const tasks = [
  () => delay(500).then(() => console.log("A")),
  () => delay(300).then(() => console.log("B")),
  () => delay(100).then(() => console.log("C")),
]

function delay(ms) {
  return new Promise(res => setTimeout(res, ms))
}
```

### **Task:**

Run them **in order**: A → B → C
(You **may not** modify the array.)

**Output should be exactly:**

```
A
B
C
```

---

## **Challenge 3 — Handle Mixed Success/Failure**

You need to fetch multiple product prices:

```js
async function getPrice(id) {
  // sometimes fails
  if (Math.random() < 0.4) throw new Error("Network Error")
  return { id, price: Math.floor(Math.random() * 100) }
}
```

### **Task:**

Given:

```js
const ids = [101, 102, 103, 104]
```

Call **all price requests in parallel**, but:

* **Do not stop** if some fail
* Return **both success and failed results** in the final output

### **Expected Output Example:**

```js
{
  success: [
    { id: 101, price: 42 },
    { id: 104, price: 91 }
  ],
  failed: [
    { id: 102, error: "Network Error" },
    { id: 103, error: "Network Error" }
  ]
}
```

