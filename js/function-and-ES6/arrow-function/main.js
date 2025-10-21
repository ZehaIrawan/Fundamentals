// ## ⚙️ **Challenge 2 – Lexical `this` Behavior**

// **Goal:** Understand that arrow functions *don’t have their own `this`*.

const counter = {
  count: 0,
  start: function () {
    setInterval(function () {
      this.count++
      console.log(this.count)
    }, 1000)
  }
}
counter.start()


// **Your tasks:**
// 1️⃣ Observe the output — does `this.count` work?
// 2️⃣ Fix it **using an arrow function** so `this` refers to the `counter` object.