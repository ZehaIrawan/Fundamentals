
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