// Create a `RateLimiter` class that limits how often a function can be called.

// )


// Requirements:

// 1. Accept:

//    * `maxRequests`
//    * `perMs` (time window)
// 2. Queue tasks if limit exceeded.
// 3. Run tasks automatically when allowed.
// 4. Must use **private fields** + **prototype methods**.


// https://chatgpt.com/c/69349de0-7fe0-8324-9de7-a655f2600c81
// https://web.dev/learn/javascript/classes/class-fields


class RateLimiter {
  constructor(maxRequests, perMs){
    this.maxRequests = maxRequests;
    this.perMs = perMs;
  }
  
  run(cb){
    // if still inside the limit run
    // if need add to queue
    cb()
  }
}
const limiter = new RateLimiter(2, 1000) // max 2 calls per second
limiter.run(() => console.log("task"))


// why use this inside constructor

