// import { JSDOM } from 'jsdom'
const {JSDOM} = require('jsdom')

const dom = new JSDOM(`<!DOCTYPE html><body></body>`)
const document = dom.window.document

// ## 🖱 **Challenge 3 – Event Handler in Browser**

// ### **Goal:** Learn what `this` points to in DOM events.


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

// **🧠 Task:**
// 1️⃣ Click the button — what prints for both logs?
// 2️⃣ Why does one show `"Click Me"` and the other `undefined`?

// 💡 *Hint:* In event listeners, `function()` binds `this` to the element, but arrow functions don’t.
