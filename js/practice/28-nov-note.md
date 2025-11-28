Need to learn

# Concept
1. Temporal dead zone
- Event Loop, Microtasks & Macrotasks
- Promises & Async/Await
- Type Coercion
- Prototypes & Classes (Challenge 9)
- Lexical environment <=====

# Improvement
- Avoiding manual `push` when using functional style


1. TDZ = the period between variable creation and variable initialization where the variable exists but cannot be accessed.

var is hoisted + initialized as undefined
let and const are hoisted but NOT initialized, so touching them early = ❌ error.

```js
// Basic TDZ Check
console.log(a);
let a = 10;

// TDZ Inside a Block (Medium)
let x = 1;

{
  console.log(x);
  let x = 2;
}
// Real-World Bug: Function Default Parameter

let discount = 10;

function getPrice(price, discount = discount) {
  return price - discount;
}

console.log(getPrice(100));


```
ReferenceError: Cannot access 'a' before initialization

- i understand challenge 1 is throwing reference error because its accessed before defined, but why 2nd challenge also

- it's same name variable it gets overwritten by the object scope?

## Answer
✅ Yes, but it’s not “overwritten” — it’s “shadowed”

When JS enters a new block { ... }, it creates a new lexical environment.

Shadowing ≠ overwriting.

“Inside this block, when you say x, I will always refer to the inner x, even before it is initialized.”