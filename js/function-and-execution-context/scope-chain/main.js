function createCounter() {
  let count = 0
  return function() {
    count++
    console.log(count)
  }
}

const counterA = createCounter()
counterA()
counterA()

const counterB = createCounter()
counterB()

//  Why does `count` not reset?**


