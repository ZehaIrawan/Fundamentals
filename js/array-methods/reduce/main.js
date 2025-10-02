
// 🔰 Challenge 1: Sum All Numbers
const numbers = [10, 20, 30];
// Goal: Use reduce to return the sum: 60



// 🔁 Challenge 2: Flatten an Array
const nested = [[1, 2], [3, 4], [5]];
// Goal: Use reduce to flatten: [1, 2, 3, 4, 5]



// 🔁 Challenge 3: Count Occurrences
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
// Goal: Count how many times each fruit appears
// { apple: 3, banana: 2, orange: 1 }


// 🔁 Challenge 4: Find Max / Min
const scores = [90, 70, 50, 120, 65];
const max = scores.reduce((acc, score) => Math.max(acc, score), -Infinity);
const min = scores.reduce((acc, score) => Math.min(acc, score), Infinity);
console.log("4) Max:", max, "Min:", min); // Max: 120 Min: 50


// 🔁 Challenge 5: Group by Property
const users = [
  { name: 'Alice', role: 'admin' },
  { name: 'Bob', role: 'user' },
  { name: 'Charlie', role: 'admin' },
  { name: 'Dave', role: 'user' }
];
// Group users by role
const grouped = users.reduce((acc, user) => {
  acc[user.role] = acc[user.role] || [];
  acc[user.role].push(user.name);
  return acc;
}, {});
console.log("5) Grouped:", grouped);
// { admin: ['Alice','Charlie'], user:['Bob','Dave'] }


// 🔁 Challenge 6: Map with Reduce
const nums = [1, 2, 3];
// Re-implement map -> square numbers
const squared = nums.reduce((acc, n) => {
  acc.push(n * n);
  return acc;
}, []);
console.log("6) Squared:", squared); // [1, 4, 9]


// 🔁 Challenge 7: Filter with Reduce
const numbers2 = [1, 2, 3, 4, 5];
// Re-implement filter -> keep evens
const evens = numbers2.reduce((acc, n) => {
  if (n % 2 === 0) acc.push(n);
  return acc;
}, []);
console.log("7) Evens:", evens); // [2, 4]


// 🔁 Challenge 8: Build Object (Dictionary)
const people = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];
// Convert array -> object keyed by id
const peopleMap = people.reduce((acc, p) => {
  acc[p.id] = p;
  return acc;
}, {});
console.log("8) Object Map:", peopleMap);
// { 1: {id:1, name:'Alice'}, 2: {id:2, name:'Bob'} }


// 🔁 Challenge 9: Function Pipeline
const funcs = [
  x => x + 1,
  x => x * 2,
  x => x - 3
];
// Apply all functions in order starting from 5
const result = funcs.reduce((acc, fn) => fn(acc), 5);
console.log("9) Pipeline Result:", result); // 9


// 🔁 Challenge 10: Async with Reduce
// Run promises sequentially
const urls = ['/a', '/b', '/c'];
async function fakeFetch(url) {
  return new Promise(resolve => {
    setTimeout(() => resolve(`fetched:${url}`), 200);
  });
}
async function fetchSequential() {
  return await urls.reduce(async (accP, url) => {
    const acc = await accP;
    const res = await fakeFetch(url);
    acc.push(res);
    return acc;
  }, Promise.resolve([]));
}
fetchSequential().then(res => console.log("10) Async Sequential:", res));
// [ 'fetched:/a', 'fetched:/b', 'fetched:/c' ]
