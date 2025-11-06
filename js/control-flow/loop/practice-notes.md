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