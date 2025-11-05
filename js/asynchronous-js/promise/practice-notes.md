## **Challenge 1 — Run Promises in Parallel**

Write code to fetch all of them in parallel and return the array of results.

```js
const urls = [
  "/api/user",
  "/api/posts",
  "/api/notifications",
]

async function fetchData(url) {
  const res = await fetch(url)
  return res.json()
}
```

My answer

```js
Promise.all(
 fetchData(urls[0]),
 fetchData(urls[1]),
 fetchData(urls[2])
)
```

You're close — the main correction is that Promise.all expects an array, not multiple separate arguments.

```js
const results = await Promise.all(
  urls.map(u => fetchData(u))
)

console.log(results)
```


## **Challenge 2 — Run Promises Sequentially**

TypeError: Promise.all(...) is not a function

dont await always need inside async function

Ya — await hanya bisa dipakai di dalam async function, kecuali kalau kamu berada di ESM top-level (file module modern .mjs atau type: "module").

```js
for(t of tasks) {
  await t()
}
```

in js should have variable

| Loop Type    | What It Iterates                       | Works Here?          | Explanation                              |
| ------------ | -------------------------------------- | -------------------- | ---------------------------------------- |
| `for...of`   | **values** in array                    | ✅ Yes                | Each value is the actual task function   |
| `for...in`   | **indexes** (e.g. `"0"`, `"1"`, `"2"`) | ⚠️ No (not directly) | It gives string keys, not the functions  |
| `.forEach()` | values, but cannot `await` properly    | ❌ No                 | `await` inside `.forEach()` doesn’t wait |
