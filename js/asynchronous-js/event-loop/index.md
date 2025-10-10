JavaScript is single-threaded, meaning it can run one thing at a time.
But browsers (and Node.js) handle async tasks — like setTimeout, fetch, or event listeners — using the event loop.

Here’s the simplified flow:

1. Call Stack → runs your synchronous code line-by-line.

2. Web APIs → handle async tasks (e.g., timers, HTTP requests).

3. Callback Queue (Task Queue) → stores callbacks ready to run after the stack is clear.

4. Event Loop → constantly checks:

  - “Is the call stack empty?”

  - If yes → push the next callback from the queue into the stack.

💡 In short:

The event loop lets JS look synchronous while still handling async tasks like timers, fetches, and UI events.