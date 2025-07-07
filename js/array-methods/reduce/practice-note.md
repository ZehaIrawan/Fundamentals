# 🔁 Challenge 2: Flatten an Array

Mistake 1
Should have used spread operator to copy the array items

Mistake 2
Uses return acc.push(...arr);
Instead of two lines
  acc.push(...arr)
  return acc

🧠 What does Array.prototype.push() return?
push(...items) adds elements to an array, but returns the new length of the array, not the array itself.