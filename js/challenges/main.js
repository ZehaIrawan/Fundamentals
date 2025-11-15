
// # **6 Promise Sequence (No `for` loops)**

// Run the tasks **one after another**, not parallel:


const tasks = [
  () => delay(500).then(() => console.log("A")),
  () => delay(300).then(() => console.log("B")),
  () => delay(100).then(() => console.log("C")),
];

function runInOrder(tasks){
  Promise.all(tasks)
}

runInOrder(tasks)

// Write `runInOrder(tasks)` to print:

// ```
// A
// B
// C
// ```