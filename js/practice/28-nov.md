Here are **10 quick-fire JS challenges** designed to diagnose your current level — each challenge maps to a specific concept.
Just try solving them; whichever ones feel confusing → *that’s the concept you should learn next.*

---

# ✅ **10 JavaScript Diagnostic Challenges (What You Should Learn Next)**

---

## **1. Hoisting & TDZ**

**Challenge:**
What is the output?

```js
console.log(a)
let a = 10
```

If you’re not sure → learn **Temporal Dead Zone**, **hoisting**, **let vs var**.

---

## **2. Closures**

**Challenge:**
Fix this so it prints 0,1,2.

```js
const arr = []

for (var i = 0; i < 3; i++) {
  arr.push(() => console.log(i))
}

arr[0]()
arr[1]()
arr[2]()
```

If confusing → study **closures**, **scope**, **var vs let**, **IIFE**.

---

## **3. Promises + Async/Await**

**Challenge:**
Run tasks in sequence **without modifying the array**:

```js
const tasks = [
  () => delay(300).then(() => console.log("A")),
  () => delay(200).then(() => console.log("B")),
  () => delay(100).then(() => console.log("C")),
]

function delay(ms) {
  return new Promise(res => setTimeout(res, ms))
}

// Run A → B → C
```

Stuck? → learn **Promise chaining**, **async/await**, **control flow**.

---

## **4. Type Coercion**

**Challenge:**
What is the output?

```js
console.log(1 + "2")
console.log("10" - 2)
console.log([] == 0)
```

If unsure → learn **coercion rules**, **ToPrimitive**, **== vs ===**.

---

## **5. High-Order Functions**

**Challenge:**
Rewrite this using `.filter` and `.map`:

```js
const nums = [1,2,3,4,5]
const result = []

for (const n of nums) {
  if (n % 2 === 0) result.push(n * 10)
}
```

If hard → learn **functional programming** basics.

---

## **6. Immutability & Spread**

**Challenge:**
Update age to 30 *without mutating* the original object:

```js
const user = { name: "Zeha", age: 20 }
// newUser = ?
```

If unsure → learn **spread**, **rest**, **immutable patterns**.

---

## **7. Destructuring**

**Challenge:**
Extract `title` and `price` from:

```js
const product = {
  id: 1,
  info: { title: "Macbook", price: 2400 }
}
```

If confused → study **nested destructuring**.

---




## **8. Optional Chaining & Nullish Coalescing**

**Challenge:**
Safely read the street name (if exists):

```js
const user = { address: { city: "Jakarta" } }
// Get user.address.street or "N/A"
```



If unclear → learn **?.** and **??**.

---

## **9. Prototype & Classes**

**Challenge:**
Rewrite function constructor to ES6 class:

```js
function Car(brand) {
  this.brand = brand
}
Car.prototype.honk = function() {
  console.log("beep")
}
```

If hard → learn **prototype chain**, **classes**, **this**.

---

## **10. Event Loop (Microtask vs Macrotask)**

**Challenge:**
What is the exact output order?

```js
console.log("a")

setTimeout(() => console.log("b"), 0)

Promise.resolve().then(() => console.log("c"))

console.log("d")
```

If unsure → learn **event loop**, **call stack**, **microtask queue**.



---

# ⭐ **How to Use This**

Try to solve all 10.
Then tell me:

* which ones were easy
* which ones were confusing

I'll generate a **personalized learning roadmap** based on your gaps.

Want the answers too?
