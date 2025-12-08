# Definition
- Prototype = the fallback object used for inheritance.
- A prototype is an object that another object uses as a fallback for properties and methods.

- If an object doesn’t have a property, JS looks at its prototype.

```js
const obj = { name: "Zeha" }

console.log(obj.toString)
```

You never defined toString, but it works because:
```js
obj → prototype → Object.prototype → has toString
```

- JS keeps looking “up the chain” until it finds the property.

Prototype chain = series of fallbacks.
Classes = nicer syntax that sets prototypes for you.
Methods in classes live on the prototype, not each instance.

🧩 Prototype is the inheritance system of JavaScript

In other languages:

- Java → class-based inheritance
- Python → class-based
- Ruby → class-based

But JavaScript uses prototype-based inheritance.
Classes in JS are just prettier syntax for prototypes.

1️⃣ .prototype

Exists only on functions.
It is the object that instances will inherit from.

2️⃣ __proto__

Exists on every object.
It points to its prototype (the thing it inherits from).
===

so if interviewer ask can you explain prototype?

You should NOT ask:

"Do you mean prototype method or prototype object?"

Instead, you give a clean, unified explanation that covers both naturally.

```bash
In JavaScript, every object has an internal prototype — a hidden link to another object called its prototype. This prototype forms the basis of JavaScript’s inheritance model, known as the prototype chain.

When we use constructor functions or classes, the function has a .prototype property, and objects created with new will have their internal prototype (__proto__) set to point to that .prototype object.

So .prototype is a property on functions that defines what instance objects inherit, and [[Prototype]] is the actual internal prototype of objects.
```

A constructor function is just a regular function that is intended to be used with the new keyword to create objects.

```js
function Person(name) {
  this.name = name
}
const p = new Person("Alice")
```

Constructor functions exist because they are the old way of doing what class does.

JavaScript originally didn’t have class until ES6 (2015).
Before that, constructor functions were the only option.
