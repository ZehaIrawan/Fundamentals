
# 🔰 Challenge 1: Sum All Numbers
```js
const total = numbers.reduce(acc, num => acc + num,0)
```

# Challenge 2: Flatten an Array
```js
const flat = nested.reduce((acc, arr) => acc.concat(arr), []);

// or

const res = nested.reduce((arr,curr)=> {
  arr.push(...curr)

  return arr
},[])
```