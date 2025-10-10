# 🧩 Challenge 1 — Identify what goes where

// Q: Which are in the stack? Which live in the heap?

// a => stack, simple variable
// b => stack, simple string
// c => heap, complex object
// d => heap, complex object
// e => heap, function

# 🔁 Challenge 2 — Reference vs Copy
because we update the reference to a => We didn’t update the reference variable, we updated the object the reference points to.

Q: Why did changing b affect a?

# 🧱 Challenge 3 — Garbage Collection

Q: When does the object { name: "Zeha" } get cleaned from the heap?

when u1 = null

✅ Correct — the object becomes eligible for garbage collection once u1 = null and there are no other live references to that returned object.

Quick nuances to lock it in:

- When exactly? Not immediately on the null line. GC runs later, nondeterministically (when the engine decides). Think: “eligible now; collected sometime after.”

- Only if it’s truly unreachable. If that object was stored anywhere else (e.g., pushed into a global array, captured by a closure, attached to a DOM node or event listener), it’s still reachable → not collected.

- Engine behavior: Modern JS engines (like V8) use mark-and-sweep; they start from roots (global, current stack, active closures) and mark everything reachable. Unmarked heap objects get swept.

# 🌀 Challenge 4 — Closure keeps heap alive

Because it's still being reference inside closure =>

That object stays alive because the returned inner closes over data. As long as fn (the closure) is reachable, the GC must keep data in the heap.

#  ⚡ Challenge 5 — Large Memory Objects

=> because the code are dealing with array, which is a data structure

“Stack holds references, heap holds actual data. Arrays (and their elements) live in the heap.”

- Arrays in JavaScript are objects, and all objects live in the heap.

- The variable (like big) exists in the stack, storing only a reference (pointer) to that heap object.
