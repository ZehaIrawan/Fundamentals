class Counter {
  count = 0

  increase = () => {
    this.count++
    console.log(this.count)
  }
}

// instance of counter
const counter = new Counter()

// variable hold a function of increase
const inc = counter.increase
inc() // ❓ what happens here?

