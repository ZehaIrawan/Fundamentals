
// ### **1) Transform API Data**

const users = [
  { id: 1, name: "John", roles: ["user"] },
  { id: 2, name: "Sara", roles: ["admin", "user"] },
  { id: 3, name: "Mike", roles: ["user"] }
];


// Return **only names of users who are admin**:
// result → ["Sara"]

const adminUsers = users.filter(u => u.roles.includes("admin"))

// assuming there are only 1 user
// can use adminUsers[0].name

// if there a many need to loop through the array and return the name

const adminUsersName = adminUsers.map(admin => admin.name)

console.log(adminUsersName)

# Answer
```js
const users = [
  { id: 1, name: "John", roles: ["user"] },
  { id: 2, name: "Sara", roles: ["admin", "user"] },
  { id: 3, name: "Mike", roles: ["user"] }
];

const adminUsersName = users
  .filter(user => user.roles.includes("admin"))
  .map(user => user.name);

console.log(adminUsersName); // ["Sara"]

// or

const adminUsersName = users
  .filter(({ roles }) => roles.includes("admin"))
  .map(({ name }) => name);
```

This is exactly how a senior dev writes:

Filter first

Then map

No for-loops

No clutter

Pure focused logic

✅ Skill demonstrated:

Functional pipeline thinking (filter → map)

Good naming clarity

Attention to structure

# Note:
- You can chain array methods
- You can destructure the key

# **2) Group Items by Key**

const orders = [
  { id: 1, user: 'A', amount: 100 },
  { id: 2, user: 'B', amount: 50 },
  { id: 3, user: 'A', amount: 75 }
];

// {
//   A: [100, 75],
//   B: [50]
// }

let orderGroup = {}

orders.map(order => {
  if(orderGroup[order.user]) {
    orderGroup[order.user].push(order.amount)
  } else{
    orderGroup[order.user] = [order.amount]
  }
})

⭐ But here’s how to make it more senior-level clean:
1) Use reduce instead of map

Because you're building a new object, not transforming an array.

```js
const grouped = orders.reduce((acc, { user, amount }) => {
  acc[user] ??= [];        // modern JS: initialize if undefined
  acc[user].push(amount);
  return acc;
}, {});
```


Why reduce here?

The intent is: accumulate into a result → reduce matches that purpose.

map is for creating a new array of same length → not happening here.


🔥 Bonus: The cleanest version (read this slowly)
```js
const grouped = orders.reduce((acc, o) => {
  (acc[o.user] ??= []).push(o.amount);
  return acc;
}, {});
```


This uses Nullish Assignment (??=) → sets default only if value is null or undefined.

This is how experienced JS developers write compact accumulator logic.

- My second attempt with reduce

```js
const groupedOrders = orders.reduce((acc, order) => {
  if (acc[order.user]) {
    acc[order.user].push(order.amount);
  } else {
    acc[order.user] = [order.amount];
  }
  return acc;
}, {});
```

- Note
- forget to return when it's not arrow function
- accumulator can be object or array

This uses Nullish Assignment (??=) → sets default only if value is null or undefined.

# 3 Count Word Frequency**
const text = "apple banana apple orange banana apple";

const textArray = text.split(' ')

let wordFrequency = textArray.reduce((acc,word) => {
  if(acc[word]) {
    acc[word] += 1
  } else{
    acc[word] = 1
  }
 return acc
},{})

console.log(wordFrequency)

// { apple: 3, banana: 2, orange: 1 }

//   if(acc[word]) {
// TypeError: Cannot read properties of undefined (reading 'banana')

// forgot to return accumulator

// OR
acc[word] = (acc[word] || 0) + 1;


// nullish coalescing
acc[word] = (acc[word] ?? 0) + 1;

# **4 Create a Counter with Private State**

// Write a `createCounter()` so:
// (without using class)

function createCounter(){
  let count = 0
  return function increase(){
    count++
    console.log(count)
  }
}

const counter = createCounter();
counter(); // 1
counter(); // 2
counter(); // 3

// closure
// by returning value?


// # A closure is a function that has access to the parent scope, after the parent function has closed.

https://www.greatfrontend.com/questions/quiz/what-is-a-closure-and-how-why-would-you-use-one