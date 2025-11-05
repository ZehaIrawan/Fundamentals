const tasks = [
  () => delay(500).then(() => console.log("A")),
  () => delay(300).then(() => console.log("B")),
  () => delay(100).then(() => console.log("C")),
]

function delay(ms) {
  return new Promise(res => setTimeout(res, ms))
}


// iterate through tasks array

for(const task of tasks) {
  await task()
}



