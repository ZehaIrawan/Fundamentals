// 🔰 Challenge 1: Double the Numbers

```js
const double = numbers.map(n => n * 2)
```

// 🔁 Challenge 2: Extract Names from Objects

```js
const names = users.map(u => u.name)
```

// 🔁 Challenge 3: Convert Strings to Uppercase
```js
const caps = fruits.map(f=> f.toUpperCase())
```

// 🔁 Challenge 4: Add "USD" to Prices
```js
const formatted = prices.map(p => `${p} USD`)
```

// 🔁 Challenge 5: Square Each Number
```js
const sq = nums.map(n => n * n)
```

// 🔁 Challenge 6: Extract IDs
```js
const ids = posts.map(p => p.id)
```

// 🔁 Challenge 7: Format User Descriptions
```js
const formatted = people.map(p=> `${p.name} is a ${p.role}`)
```

// 🔁 Challenge 8: Parse Numbers from Strings
```js
const parse = strNumbers.map(s => parseInt(s))
```

// 🔁 Challenge 9: Add Index to Each Value
```js
const idx = letters.map((l,index) => `${index}:${l}` )
```

// 🔁 Challenge 10: Map to Boolean
```js
const bool = ages.map(a => a >= 18 )
```

// 🔁 Challenge 11: Map Nested Arrays Length
```js
const len = groups.map(g => g.length) 
```

// 🔁 Challenge 12: Create Objects from Values
```js
const transform = colors.map(c => {
  return {"color": `${c}`}
})
```