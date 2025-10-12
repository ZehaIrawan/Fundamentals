// it's not 1,2,3
// because of var scope and closure

// both of the loop stops at 4, both for let it's only lives inside the JS engine internal

// it's just that with var we have the same variable for each iteration, but with let it's a new instance for each iteration

// the loop finished first
// then the timeout being set



// ⚙️ The subtle truth: how the for loop actually works

// The for loop isn’t just “run the body three times.”
// It runs in this exact sequence every cycle:


// 1️⃣  Initialization
// 2️⃣  Condition check
// 3️⃣  Execute body (if true)
// 4️⃣  Increment (i++)
// 5️⃣  Go back to condition


// before we have let that is block scope
// | Era     | Solution        | Idea                                                |
// | ------- | --------------- | --------------------------------------------------- |
// | Pre-ES6 | IIFE            | Create a new scope manually                         |
// | Pre-ES6 | `.bind()`       | Bind the current value to a new function            |
// | Pre-ES6 | Helper function | Pass `i` as argument to freeze it                   |
// | ES6+    | `let`           | Each loop iteration has its own `i` automatically ✅ |


// https://chatgpt.com/c/68e98f05-2520-8321-b49e-c1cf2a4997a2