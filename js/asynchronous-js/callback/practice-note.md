
## ⚙️ **Challenge 1 – Basic Callback Flow**

```js
function greet(name, callback,callback2) {
  console.log(`Hello, ${name}!`)
  callback()
  callback2(name)
}

function loadingData(name){
  console.log(`loading ${name}'s data`)
}

greet("Zeha", () => console.log("Welcome to the app!"),loadingData)
```