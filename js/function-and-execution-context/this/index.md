2. But arrow functions changed the landscape

Arrow functions don’t have their own this,
so in many modern use cases (especially in functional / React / Node code),
you don’t need to worry about rebinding this anymore.

| Area                      | Why it’s still used                                                      |
| ------------------------- | ------------------------------------------------------------------------ |
| **Classes**               | `this` refers to instance fields & methods                               |
| **OOP frameworks / SDKs** | Many APIs rely on methods using `this` (e.g., Node, Three.js, Sequelize) |
| **Event handlers (DOM)**  | `this` = the element clicked                                             |
| **Legacy / ES5 code**     | A lot of existing web apps still depend on `this`                        |

🧩 4. Where it’s less common

Modern JS often avoids this in favor of:

- Arrow functions → use lexical scope

- Modules + closures → encapsulate state

- Functional programming patterns (React, Next.js, Svelte, etc.)