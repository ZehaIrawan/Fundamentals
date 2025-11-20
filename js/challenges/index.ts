// npx ts-node src/index.ts

// # ✅ **2. Narrowing Unknown Data (Zod-like behavior)**

// ### **Real-world:**

// You receive user input from a form or JSON, but the type is `unknown` until validated.

// ### **Challenge:**

// Implement a simple narrowing check:


function isUser(obj: unknown): obj is { name: string; age: number } {
  if(typeof obj === 'object') {
    if(typeof obj.name)
  }
  return false
}

function loadUser(input: unknown) {
  if (!isUser(input)) {
    throw new Error("Invalid user");
  }

  // Should autocomplete: input.name, input.age
  console.log(input.name.toUpperCase());
}

loadUser({'egg':1})

// Correctly narrow type using runtime checks + TypeScript type guard.

// Narrowing = TypeScript automatically understanding a more specific type after a condition.