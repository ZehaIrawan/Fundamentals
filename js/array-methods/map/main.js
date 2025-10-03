// cd js/array-methods/map
// ======================================
// 🔰 Challenge 1: Double the Numbers
const numbers = [1, 2, 3, 4];
// Goal: [2, 4, 6, 8]


// ======================================
// 🔁 Challenge 2: Extract Names from Objects
const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
];
// Goal: ["Alice", "Bob"]


// ======================================
// 🔁 Challenge 3: Convert Strings to Uppercase
const fruits = ["apple", "banana", "cherry"];
// Goal: ["APPLE", "BANANA", "CHERRY"]


// ======================================
// 🔁 Challenge 4: Add "USD" to Prices
const prices = [10, 20, 30];
// Goal: ["10 USD", "20 USD", "30 USD"]

// ======================================
// 🔁 Challenge 5: Square Each Number
const nums = [2, 4, 6];
// Goal: [4, 16, 36]

// ======================================
// 🔁 Challenge 6: Extract IDs
const posts = [
  { id: 101, title: "Hello" },
  { id: 102, title: "World" },
];
// Goal: [101, 102]

// ======================================
// 🔁 Challenge 7: Format User Descriptions
const people = [
  { name: "Zeha", role: "Dev" },
  { name: "Lina", role: "Designer" },
];
// Goal: ["Zeha is a Dev", "Lina is a Designer"]

// ======================================
// 🔁 Challenge 8: Parse Numbers from Strings
const strNumbers = ["1", "2", "3"];
// Goal: [1, 2, 3]

// ======================================
// 🔁 Challenge 9: Add Index to Each Value
const letters = ["a", "b", "c"];
// Goal: ["0:a", "1:b", "2:c"]



// ======================================
// 🔁 Challenge 10: Map to Boolean
const ages = [12, 18, 21];
// Goal: [false, true, true] (age >= 18)



// ======================================
// 🔁 Challenge 11: Map Nested Arrays Length
const groups = [
  ["A", "B"],
  ["C", "D", "E"],
  ["F"],
];
// Goal: [2, 3, 1]




// ======================================
// 🔁 Challenge 12: Create Objects from Values
const colors = ["red", "green", "blue"];
// Goal: [{color:"red"}, {color:"green"}, {color:"blue"}]


const transform = colors.map(c => {
  return {"color": `${c}`}
})

console.log(transform)
