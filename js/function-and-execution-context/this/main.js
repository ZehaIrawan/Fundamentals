const user = {
  name: "Zeha",
  greet() {
    console.log(`Hi, I'm ${this.name}`)
  }
}

const greetFn = user.greet.bind(user)
greetFn.bind(user)
greetFn() // ❓ what happens here?

// **🧠 Task:**
// 1️⃣ Predict what prints.
// 2️⃣ Fix it so that calling `greetFn()` still prints `"Hi, I'm Zeha"`.

// 💡 *Hint:* use `.bind(user)` to permanently attach `this`.