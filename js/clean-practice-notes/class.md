```js
class RateLimiter {
  constructor(maxRequests, perMs){
    console.log(`maxRequest: ${maxRequests}, perMs: ${perMs}`)
  }

  run(cb){
    // if still inside the limit run
    // if need add to queue
    cb()
  }
}
const limiter = new RateLimiter(2, 1000) // max 2 calls per second
limiter.run(() => console.log("task"))
```


- Classes are a template for creating objects.
- Classes in JS are built on prototypes but also have some syntax and semantics that are unique to classes.

- The constructor method is a special method for creating and initializing an object created with a class.

# Questions
1. why method in class doesn't need function keyword?

Because class methods are syntax sugar for prototype methods.

```js
class Example {
  sayHello() {}
}
```
Is actually equal to:
```js
function Example() {}
Example.prototype.sayHello = function() {}
```

  - cleaner syntax
  - automatically assigned to prototype
  - memory efficient
  - standardized in class spec

2. why use this inside constructor instead of direct param?

```js
class RateLimiter {
  constructor(max, perMs) {
    this.max = max   // 👈 why this?
    this.perMs = perMs
  }
}
```
Parameters disappear after the constructor finishes
```js
constructor(max) {
  console.log(max) // works
}
console.log(max) // ❌ not defined outside constructor
```

- constructor parameters are temporary
- this.something = ... makes it part of the object instance
- methods outside constructor need access to those values
- allows dynamic instance configuration-