The most fundamental concept in Node.js is:

**the Event Loop (asynchronous, non-blocking I/O).**

Node.js is built around the idea that:

* it runs **single-threaded JavaScript**
    - A thread is basically a “worker lane” inside a program that can execute instructions.
* but can handle **many tasks at once** by not waiting/blocking
* instead it uses **callbacks / promises / async-await** and lets the event loop schedule work

### In simple terms:

Node doesn’t “pause” your program while waiting for slow stuff like:

* reading files
* database queries
* HTTP requests

It starts the task, continues running other code, and comes back later when the result is ready.

If you understand the **event loop + async execution**, you understand Node.

Do this **15-minute mini project**:

### Goal: *See the event loop in action*

Create `eventloop.js`:

```js
console.log("1) start");

setTimeout(() => {
  console.log("4) setTimeout callback");
}, 0);

Promise.resolve().then(() => {
  console.log("3) promise then");
});

console.log("2) end");
```

Run:

```bash
node eventloop.js
```

### Predict the output first

Most beginners guess:

```
start
end
setTimeout
promise
```

But the real output is:

```
1) start
2) end
3) promise then
4) setTimeout callback
```

### Why this teaches the core concept

* `console.log` runs immediately (**sync**)
* `Promise.then` goes into the **microtask queue**
* `setTimeout` goes into the **macrotask queue**
* Node’s event loop always runs **microtasks before timers**

If you understand why that output happens, you understand the core of Node.js.

✅ Microtasks = Promise-related

If it comes from:

Promise.then / catch / finally
async/await (because it’s Promise-based)
queueMicrotask()
process.nextTick() (Node special, even higher priority than microtasks)

👉 It’s microtask queue.

✅ Macrotasks = timers + I/O + events

If it comes from:

setTimeout
setInterval
setImmediate (Node)
I/O callbacks (fs, network, etc)
DOM events (browser)

👉 It’s macrotask queue.
