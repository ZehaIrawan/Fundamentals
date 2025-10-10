// 🚨 3 Common Event Loop Mistake Challenges

// Challenge 1 – setTimeout confusion
for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000)
}

// What’s the output and why?
// it's not 1,2,3
// because of var scope and closure

// https://chatgpt.com/c/68e98f05-2520-8321-b49e-c1cf2a4997a2
