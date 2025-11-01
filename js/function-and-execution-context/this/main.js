const car = {
  brand: "Tesla",
  start: function() {
    console.log("Starting", this.brand)
    setTimeout(() => {
      console.log("Inside timeout:", this.brand)
    }, 1000)
  }
}

car.start()

// since the left side of the method is car object, then "this" keyword = car object
// first console.log = "Tesla"

// **🧠 Task:**
// 1️⃣ Predict the two console logs.
// 2️⃣ Fix it so both logs print `"Tesla"`.

// 💡 *Hint:* Arrow function inside `setTimeout` inherits the outer `this`.