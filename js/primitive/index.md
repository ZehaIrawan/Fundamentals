| Type        | Example                     | Description                                            |
| ----------- | --------------------------- | ------------------------------------------------------ |
| `string`    | `"hello"`                   | A sequence of characters                               |
| `number`    | `42`, `3.14`                | Any numeric value                                      |
| `boolean`   | `true`, `false`             | Logical true/false                                     |
| `undefined` | `undefined`                 | A variable declared but not assigned a value           |
| `null`      | `null`                      | Represents intentional absence of value                |
| `symbol`    | `Symbol("id")`              | Unique and immutable identifier (ES6)                  |
| `bigint`    | `123n`, `9007199254740991n` | Large integers beyond `Number.MAX_SAFE_INTEGER` (ES11) |

🔍 Characteristics of Primitives
✅ 1. Immutable

```js
let str = "hello";
str[0] = "H"; // ❌ Doesn't change the string
console.log(str); // "hello"
```

Primitives cannot be altered. When you "change" them, you're actually creating a new value.