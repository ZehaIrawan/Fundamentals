// 🚨 3 Common Event Loop Mistake Challenges

// Challenge 1 – setTimeout confusion
for (var i = 1; i <= 3; i++) {
  console.log(i,'i')
  setTimeout(() => console.log(i), 1000)
}

// What’s the output and why?

