
## 🧩 **Challenge 1 – Object Method**

### My answer
```js
const greetFn = user.greet
greetFn.bind(user)
greetFn() // ❓ what happens here?
```

It failed because .bind() does not mutate the original function.
It returns a new version with a permanently fixed this.

=> .bind() makes a new function where this is permanently set to the object you choose.

Correct
```js
const greetFn = user.greet.bind(user)
greetFn() // ❓ what happens here?
```

// this belong to the greet function
// which is undefined
// binding should happen before the call

## ⚙️ **Challenge 2 – Arrow Function vs Regular Function**
### **Goal:** Understand that arrow functions *don’t have their own* `this`.

Regular: Dinda
Arrow: undefined


===
/Users/zehairawan/Project/Fundamentals/js/node_modules/jsdom/lib/jsdom/browser/parser/html.js:3
const parse5 = require("parse5");
               ^

Error [ERR_REQUIRE_ESM]: require() of ES Module /Users/zehairawan/Project/Fundamentals/js/node_modules/parse5/dist/index.js from /Users/zehairawan/Project/Fundamentals/js/node_modules/jsdom/lib/jsdom/browser/parser/html.js not supported.
Instead change the require of index.js in /Users/zehairawan/Project/Fundamentals/js/node_modules/jsdom/lib/jsdom/browser/parser/html.js to a dynamic import() which is available in all CommonJS modules.
    at Object.<anonymous> (/Users/zehairawan/Project/Fundamentals/js/node_modules/jsdom/lib/jsdom/browser/parser/html.js:3:16) {
  code: 'ERR_REQUIRE_ESM'
}

Node.js v20.16.0


https://github.com/jsdom/jsdom/issues/3959

Need to use node 22.12.0 or later

// ## 🖱 **Challenge 3 – Event Handler in Browser**

// ### **Goal:** Learn what `this` points to in DOM events.

```js
const {JSDOM} = require('jsdom')

const dom = new JSDOM(`<!DOCTYPE html><body></body>`)
const document = dom.window.document




const button = document.createElement('button')
button.textContent = "Click Me"
document.body.appendChild(button)

button.addEventListener('click', function() {
  console.log("Clicked:", this.textContent)
})

button.addEventListener('click', () => {
  console.log("Arrow Clicked:", this.textContent)
})


button.click()
```


// **🧠 Task:**
// 1️⃣ Click the button — what prints for both logs?
// 2️⃣ Why does one show `"Click Me"` and the other `undefined`?

// 💡 *Hint:* In event listeners, `function()` binds `this` to the element, but arrow functions don’t.

Clicked: Click Me
Arrow Clicked: undefined

## 🔁 **Challenge 4 – Class and `this`**

### **Goal:** Understand `this` inside class methods.

```js
class Counter {
  count = 0

  increase() {
    this.count++
    console.log(this.count)
  }
}

// instance of counter
const counter = new Counter()

// variable hold a function of increase
const inc = counter.increase
inc() // ❓ what happens here?
```

**🧠 Task:**
1️⃣ Predict the output.
2️⃣ Fix it so `inc()` works correctly even when detached.

💡 *Hint:* Use an arrow function or `.bind(this)` in the constructor.

# Answer
the value of this gets lost, so it doesn't work as you expect.
const inc = counter.increase   // <-- we only copied the function, not the object

To make it work you can
1. bind the function to the class instance
 const inc = counter.increase.bind(counter)

2. modify the increase function to use arrow function
  // increase = () => {
  //   this.count++
  //   console.log(this.count)
  // }

  // i get the first one, explain why 2nd work, i thought arrow function dont have this

//   This increase is not a method on the prototype anymore.
// It is a property on the instance, created during construction.

// And since arrow functions don’t create their own this,
// they capture this from their surrounding scope.

// Here, the surrounding scope is the class instance itself, because this code runs inside the constructor context.

// Normal function → this determined at call time
// Arrow function → this determined at creation time