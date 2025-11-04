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