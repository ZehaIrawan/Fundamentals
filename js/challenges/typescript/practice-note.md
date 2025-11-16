Type coercion is when JavaScript automatically converts one data type into another so an operation can be completed.

TypeScript inherits this behavior because it compiles down to JavaScript — but TypeScript tries to warn you before the coercion happens.

🧠 Two types of coercion
1. Implicit (automatic)

JavaScript converts types behind the scenes.

```js
"5" - 1      // → 4   (string → number)
"5" * "2"    // → 10  (both become numbers)
"5" + 1      // → "51" (1 becomes string)
```

2. Explicit (manual)

You intentionally convert types:

```js
Number("5")   // 5
String(100)   // "100"
Boolean("")   // false
```

🎯 Why is coercion important? (Real world)
Case 1 — You get numbers as strings from API
Case 2 — Form inputs are ALWAYS strings
Case 3 — Equality pitfalls

But TS does not stop JS coercion; it only warns.

🧪 Quick mental model

+ → tends to convert everything to string

-, *, / → convert to number

== → performs coercion

=== → no coercion

Objects convert to primitives (toString or valueOf)

type ApiProduct = {
  id: string;
  price: number | string;  // API is inconsistent
};

function normalizeProduct(p: ApiProduct) {
  // FIX: always return price: number
  return {
    id: p.id,
    price: Number(p.price)
  };
}

const product = normalizeProduct({ id: "1", price: "12000" });
// product.price should be a number (12000)

console.log(product,'product')


// my answer
//     price: p.price as number
// should be
//     price: Number(p.price)

// as number is NOT a conversion.

// It only tells TypeScript to trust you — it does NOT change the runtime value.