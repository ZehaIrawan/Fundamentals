Perfect — let's **measure your TS level** and **teach you the missing concepts by doing**, not theory-dumping.

Below are **3 carefully designed challenges** that *progressively test your understanding* of:

1. **Union types**
2. **Narrowing**
3. **Type guards (Zod-like runtime checks)**

Each challenge includes:

* a short explanation of the skill you're being tested on,
* a real-world scenario,
* a code challenge for you to solve,
* and after you answer, I’ll evaluate your level and teach you the missing concepts.

---

# 🧪 **Challenge 1 — Union Types (Beginner Level)**

### 📌 Skill test:

Do you understand what it means when a variable can be **more than one type**?

### 📍 Scenario

You receive inconsistent API data:

```ts
type ApiPrice = number | string;
```

### 🧩 Task

Write a function `normalizePrice` that returns a **number no matter what**.

```ts
function normalizePrice(price: ApiPrice): number {
  // your code
}

console.log(normalizePrice("15000")); // should be 15000 (number)
console.log(normalizePrice(12000));   // should be 12000 (number)
```

➡️ **Your job:** fix the type issue.

---

# 🧪 **Challenge 2 — Narrowing with typeof (Intermediate)**

### 📌 Skill test:

Do you know how to **check the runtime type** so TS allows safe operations?

### 📍 Scenario

You want to safely print input length:

```ts
function printLength(x: string | string[]) {
  // your code
}
```

### 🧩 Task

Inside the function:

* If `x` is a string → print `x.length`
* If `x` is an array → print number of items (`x.length`)

BUT you must write the correct narrowing logic.

---

# 🧪 **Challenge 3 — Type Guard for unknown (Advanced)**

### 📌 Skill test:

Can you validate unknown data and **teach TypeScript** the type?

### 📍 Scenario

A form submits JSON but TypeScript sees it as `unknown`.

### 🧩 Task

Write a type guard:

```ts
function isUser(obj: unknown): obj is { name: string; age: number } {
  // your code
}
```

Rules:

1. Check that `obj` is a non-null object
2. Check `"name"` and `"age"` keys exist
3. Check `"name"` is string
4. Check `"age"` is number

Then:

```ts
function loadUser(input: unknown) {
  if (!isUser(input)) {
    throw new Error("Invalid user");
  }

  console.log(input.name.toUpperCase());
}
```

---

# 🎯 Instructions for you

Reply with **your solutions for challenge 1, 2, and 3**.
I will:

* review each answer
* tell you exactly what concepts you’re missing
* and then build you a custom TS learning plan based on your level

---

Whenever you're ready, send your answers!
