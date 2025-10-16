// Challenge 1 – setTimeout confusion

// Hint: due to closure and event loop timing, you might get 4, 4, 4 instead of 1, 2, 3.
// ✅ Fix: use let or an IIFE.


# Challenge 2 — “0ms” timeout isn’t immediate (blocking)
done first because syncrhonous runs first then timeout, which asynchronous use async to avoid blocking

🧠 Answer

- "done" first → synchronous finishes before async.
- Timer waits in queue → event loop picks it later.
- async doesn’t fix blocking — splitting work or workers does.

# Challenge 3 — Microtasks vs Macrotasks (ordering)

// 1. start, runs first because its synchronous
// 2. timeout, cause it's synchronous
// 3. promise, because it's waiting promoise resolved

🧠 Answer

1. console.log("start") → runs first (synchronous).
2. Promise.then(...) → runs next (microtask → higher priority).
3. setTimeout(...) → runs last (macrotask → lower priority).

💡 Quick rule of thumb
When predicting async order in JS:
1. Synchronous code → runs first.
2. Microtasks (Promises, queueMicrotask) → next.
3. Macrotasks (setTimeout, setInterval, I/O) → last.

https://javascript.info/event-loop