# 1. Error

Built in objects: Error objects are thrown when runtime errors occur.

```js
try {
  throw new Error("Whoops!");
} catch (e) {
  console.error(`${e.name}: ${e.message}`);
}
```

# 2. throw
The throw statement throws a user-defined exception.

The throw statement throws a user-defined exception. Execution of the current function will stop (the statements after throw won't be executed), and control will be passed to the first catch block in the call stack. If no catch block exists among caller functions, the program will terminate.

```js
throw error; // Throws a previously defined value (e.g. within a catch block)
throw new Error("Required"); // Throws a new Error object
```

# 3. runtime
Runtime is the environment where your JavaScript code is actually executed.

JavaScript = language
Runtime = place where JS runs
Engine = executes JS
APIs = features from the runtime

JS behaves differently depending on the runtime.

- Browser example — require doesn’t exist
- Node example — document doesn’t exist

JavaScript the language alone does not have:
- file system support
- networking
- DOM
- timers
- environment variables

> A runtime error is an error that happens while the program is running, not during parsing or compiling.

1. Parsing = reading your code and turning it into a structured format the engine understands. Parsing happens before the code runs.

JavaScript parses this code into an AST (Abstract Syntax Tree):

2. Compilation = converting parsed JavaScript code into fast machine code that the CPU can execute.

JS engines like V8, SpiderMonkey, JavaScriptCore do this automatically.

JavaScript uses “JIT compilation” (Just-In-Time)

This means:
- Parse code → build AST
- Convert AST to bytecode
- While running, frequently used code (“hot paths”) is compiled into optimized machine code

JavaScript runs much faster than pure interpretation.

3. Execution (Runtime)

Machine code is executed.
Errors here = TypeError, ReferenceError, etc.a

Do
- https://javascript.info/promise-basics#tasks