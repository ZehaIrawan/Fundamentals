# 🧭 JavaScript Nuances Roadmap

https://roadmap.sh/javascript

### 1. **Core Foundations**

* [ ] **Scoping & Hoisting**

  * `var` vs `let` vs `const`
  * Function hoisting vs variable hoisting
* [ ] **Closures**

  * Inner functions “remembering” outer scope
  * Classic examples (counter function, setTimeout in loop)
* [ ] **`this` Keyword**

  * Global vs object vs class
  * Arrow functions (lexical `this`) vs regular functions

---

### 2. **Types & Coercion**

* [ ] **Primitives vs Objects**

  * Value vs reference
* [ ] **Truthy / Falsy**

  * `0`, `""`, `null`, `undefined`, `NaN`, `false`
* [ ] **Type coercion quirks**

  * `[] + [] = ""`
  * `[] + {} = "[object Object]"`
  * `{} + [] = 0`

---

### 3. **Arrays & Objects**

* [ ] **Array methods**

  * `map`, `filter`, `reduce`, `forEach`, `find`, `some`, `every`
  * Return values (e.g., `forEach` returns `undefined`, `push` returns length)
* [ ] **Mutation vs non-mutation**

  * `push`, `splice` (mutates)
  * `concat`, `slice` (no mutation)
* [ ] **Objects**

  * Property access: dot vs bracket notation
  * Shallow copy vs deep copy (`Object.assign`, spread, structuredClone)

---

### 4. **Functions**

* [ ] **Callback vs Higher-order function**

  * Passing functions into functions
* [ ] **Arrow functions**

  * Implicit return
  * `this` binding
* [ ] **Default parameters / Rest / Spread**

  * `function sum(a=0, ...nums) {...}`

---

### 5. **Asynchronous JS**

* [ ] **Event Loop & Call Stack**

  * `setTimeout`, `setInterval`
  * Microtasks vs macrotasks
* [ ] **Promises**

  * States: pending, fulfilled, rejected
  * `.then()`, `.catch()`, `.finally()`
* [ ] **async / await**

  * Error handling with `try/catch`

---

### 6. **Prototypes & Classes**

* [ ] **Prototype chain**

  * `__proto__`, `Object.getPrototypeOf`
* [ ] **Inheritance**

  * ES5 constructor functions
  * ES6 `class` / `extends`
* [ ] **Built-in prototypes**

  * Extending `Array.prototype`, `String.prototype`

---

### 7. **DOM & Browser Specifics**

* [ ] **Events**

  * Bubbling vs capturing
  * `addEventListener` options (`once`, `passive`)
* [ ] **DOM methods**

  * `querySelector`, `innerHTML` vs `textContent`
* [ ] **Timers & Animations**

  * `requestAnimationFrame` vs `setTimeout`

---

### 8. **Tricky Edge Cases**

* [ ] **Equality**

  * `==` vs `===`
  * `Object.is(NaN, NaN)`
* [ ] **Null vs Undefined**

  * Default params, optional chaining
* [ ] **Destructuring pitfalls**

  * `{a: x} = obj`
* [ ] **Spread / Rest with objects**

  * Shallow copies, overwriting order

---

### 9. **Modern JS Features (ES6+)**

* [ ] **Modules**

  * `import` / `export` vs CommonJS
* [ ] **Generators**

  * `function*`, `yield`
* [ ] **Proxy / Reflect**

  * Trapping property access
* [ ] **Optional chaining & nullish coalescing**

  * `user?.profile?.name ?? "Guest"`

---

# ✅ Study Method

1. Take one section per week.
2. For each concept, write **tiny code snippets** in browser console or Node REPL.
3. Always test: *what does it return? does it mutate? what type is it?*
4. Keep a personal “gotcha log” — when something surprises you, save it.

---
