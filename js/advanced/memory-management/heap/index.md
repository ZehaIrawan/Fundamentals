The heap is a region in memory where data structures (objects, arrays, and functions) are stored.

| Memory Area | Used For                                                              | Size  | Example          |
| ----------- | --------------------------------------------------------------------- | ----- | ---------------- |
| **Stack**   | Simple, short-lived data (numbers, booleans, strings, function calls) | Small | `let x = 10`     |
| **Heap**    | Complex, long-lived data (objects, arrays, functions, closures)       | Large | `{name: "Zeha"}` |

```js
function greet() {
  const name = "Zeha";
  const person = { name }; // object
  console.log("Hi", person.name);
}
```

name = "Zeha" → stored in stack

person = { name } → the reference to the object is stored in stack,
but the actual object { name: "Zeha" } lives in the heap.

Stack holds a pointer → Heap holds the real thing.

🧹 Memory Management (Garbage Collection)

JavaScript’s engine (like V8) automatically removes objects in the heap that are no longer reachable.

```js
let user = { name: "Zeha" };
user = null; // no references now
// Garbage collector will clean { name: "Zeha" } from heap
```

🚀 Why You Should Care

- To understand memory leaks
- To know why closures keep data “alive”
- To debug performance or large memory usage

- Stack holds the variables + references
- Heap holds the actual objects / data structures