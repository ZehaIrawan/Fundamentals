//🥉 1. Counter Factory

//Concept: closure remembering internal state.

// Challenge: make createCounter() that remembers its count.
function createCounter() {
  // your code here
  let counter = 0

  return function() {
    counter++
    return counter
    // return counter++
  }
}

//🧠 Hint: use a variable inside createCounter() that increments each time the inner function runs.

const counter = createCounter()
console.log(counter()) // 1
console.log(counter()) // 2
console.log(counter()) // 3
