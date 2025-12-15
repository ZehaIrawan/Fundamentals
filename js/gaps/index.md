- private fields in class
- setInterval

setInterval is used when you want to run the same function repeatedly at a fixed time interval until you explicitly stop it.

```js
const id = setInterval(() => {
  console.log('Runs every second');
}, 1000);

// stop it later
clearInterval(id);
```
Common real-world use cases
1. Polling / checking something periodically
2. Timers & countdowns
3. UI updates (clocks, animations, progress)
4. Retry / background jobs

Things to be careful about ⚠️
1. It doesn’t wait for async work

| Case                            | Use                     |
| ------------------------------- | ----------------------- |
| Fixed repeated action           | `setInterval`           |
| Control timing after async work | `setTimeout` loop       |
| Precise animation               | `requestAnimationFrame` |

How real rate limiters actually work
1. Token Bucket (most common)

I’ll implement this with setInterval for clarity, but in production I’d avoid timers and calculate allowance based on elapsed time


===
# Static
- The static keyword defines a static method or field for a class

Rule of thumb

“Does this need instance data?”
Yes → regular method
No → static method

Instance data is data stored on an object instance, accessed via this, and unique per instance of a class.

- The extends keyword is used in class declarations or class expressions to create a class that is a child of another class.