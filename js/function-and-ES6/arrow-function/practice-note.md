## 🧩 **Challenge 1 – Array Methods Callback**

```js
const activeUsers = users.filter(u => {
  if(u.active === true) return u.name
})
```

.filter() expects your callback to return a boolean (true or false), thats why code above doesn't work
You should chain it with map to transform to only return name

```js
const activeUsers = users.filter((u) => u.active === true).map((u) => u.name);
```

Both u variable lives on their own scope, so they don't interact with each other

