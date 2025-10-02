// cd js/array-methods/concat
// ======================================
// 🔑 Concat Challenges for Web Dev
// ======================================

// The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

// 🌱 Challenge 1: Merge two arrays
// [1,2,3,4]
const a1 = [1, 2];
const b1 = [3, 4];



// 🌱 Challenge 2: Merge multiple arrays
const a2 = [1];
const b2 = [2, 3];
const c2 = [4, 5];
const merged2 = a2.concat(b2, c2);
console.log("2) Merge multiple arrays:", merged2); // [1,2,3,4,5]


// 🌱 Challenge 3: Concat with empty arrays
const a3 = [];
const b3 = [10, 20];
const merged3 = a3.concat(b3);
console.log("3) Empty concat:", merged3); // [10,20]


// 🌿 Challenge 4: Concat arrays of strings
const firstNames = ["Alice", "Bob"];
const lastNames = ["Smith", "Johnson"];
const merged4 = firstNames.concat(lastNames);
console.log("4) Strings:", merged4); // ["Alice","Bob","Smith","Johnson"]


// 🌿 Challenge 5: Concat arrays + single values
const base = [1, 2];
const merged5 = base.concat(3, 4);
console.log("5) With values:", merged5); // [1,2,3,4]


// 🌿 Challenge 6: Concat nested arrays
const arr6 = [1, 2];
const nested6 = [[3, 4]];
const merged6 = arr6.concat(nested6);
console.log("6) Nested arrays:", merged6); // [1,2,[3,4]]


// 🌳 Challenge 7: Merge API results
const page1 = ["post1", "post2"];
const page2 = ["post3", "post4"];
const feed = page1.concat(page2);
console.log("7) API results:", feed); // ["post1","post2","post3","post4"]


// 🌳 Challenge 8: Concat different data sources
const dbUsers = [{id:1},{id:2}];
const apiUsers = [{id:3}];
const allUsers = dbUsers.concat(apiUsers);
console.log("8) Data sources:", allUsers);
// [{id:1},{id:2},{id:3}]


// 🌳 Challenge 9: Concat & deduplicate
const arr9a = [1,2,3];
const arr9b = [3,4,5];
const merged9 = arr9a.concat(arr9b);
const unique9 = [...new Set(merged9)];
console.log("9) Deduplicated:", unique9); // [1,2,3,4,5]


// 🌳 Challenge 10: Concat in a loop
const chunks = [[1,2],[3,4],[5]];
let merged10 = [];
for (const chunk of chunks) {
  merged10 = merged10.concat(chunk);
}
console.log("10) Loop concat:", merged10); // [1,2,3,4,5]


// 🎯 Bonus: Rewrite Challenge 10 with reduce + concat
const mergedBonus = chunks.reduce((acc, chunk) => acc.concat(chunk), []);
console.log("Bonus) Reduce + Concat:", mergedBonus); // [1,2,3,4,5]
