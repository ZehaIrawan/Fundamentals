// Create a `RateLimiter` class that limits how often a function can be called.

// )


// Requirements:

// 1. Accept:

//    * `maxRequests`
//    * `perMs` (time window)
// 2. Queue tasks if limit exceeded.
// 3. Run tasks automatically when allowed.
// 4. Must use **private fields** + **prototype methods**.





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

// Classes are a template for creating objects.
// Classes in JS are built on prototypes but also have some syntax and semantics that are unique to classes.

// The constructor method is a special method for creating and initializing an object created with a class.

// method in class doesn't need function keyword

// why use this inside constructor

