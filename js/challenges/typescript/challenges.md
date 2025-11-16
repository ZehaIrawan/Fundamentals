Here are **5 TypeScript challenges** with **real-world use cases**, each focused on concepts devs *actually* face in production — coercion, types narrowing, generics, utility types, and async typing.

---

# ✅ **1. Type Coercion in API Responses**

### **Real-world:**

You fetch data from an external API, but some numeric fields come back as **string**, causing bugs in calculations.

### **Challenge:**

Fix the function so `price` is always validated and returned as a **number**.

```ts
type ApiProduct = {
  id: string;
  price: number | string;  // API is inconsistent
};

function normalizeProduct(p: ApiProduct) {
  // FIX: always return price: number
  return {
    id: p.id,
    price: p.price
  };
}

const product = normalizeProduct({ id: "1", price: "12000" });
// product.price should be a number (12000)
```

### **Goal:**

Make sure `normalizeProduct()` **converts strings → numbers safely**, and return a properly typed object.

---

# ✅ **2. Narrowing Unknown Data (Zod-like behavior)**

### **Real-world:**

You receive user input from a form or JSON, but the type is `unknown` until validated.

### **Challenge:**

Implement a simple narrowing check:

```ts
function isUser(obj: unknown): obj is { name: string; age: number } {
  // Fix this
  return false;
}

function loadUser(input: unknown) {
  if (!isUser(input)) {
    throw new Error("Invalid user");
  }

  // Should autocomplete: input.name, input.age
  console.log(input.name.toUpperCase());
}
```

### **Goal:**

Correctly narrow type using runtime checks + TypeScript type guard.

---

# ✅ **3. Reusable Generic to Extract Keys**

### **Real-world:**

You often build reusable table components, CRUD modules, ORM layers (Prisma/TypeORM), etc.
You need a utility type to extract **keys of a type whose values are string**.

### **Challenge:**

```ts
type OnlyStringKeys<T> = any; // Implement this

type User = {
  id: number;
  email: string;
  username: string;
  age: number;
};

type Result = OnlyStringKeys<User>;
// Expected: "email" | "username"
```

### **Goal:**

Create a mapped + conditional type.

---

# ✅ **4. Deep Partial for Nested Updates**

### **Real-world:**

Updating nested objects (PATCH API calls, form updates, database partial updates).

### **Challenge:**

Implement your own `DeepPartial<T>`:

```ts
type DeepPartial<T> = any; // Implement this

type Settings = {
  theme: {
    darkMode: boolean;
    fontSize: number;
  };
  notifications: {
    email: boolean;
    sms: boolean;
  };
};

const update: DeepPartial<Settings> = {
  theme: {
    darkMode: true
  }
};
```

### **Goal:**

Make all nested levels optional.

---

# ✅ **5. Async Function Typing + Inferred Return Type**

### **Real-world:**

A service layer in a SaaS app — every async function returns `Promise<Result<T>>`.

### **Challenge:**

Infer the inner type.

```ts
type Result<T> = {
  ok: boolean;
  data: T;
};

async function fetchUser() {
  return {
    ok: true,
    data: {
      name: "Zeha",
      age: 22
    }
  } as Result<{ name: string; age: number }>;
}

type ExtractData<T> = any;  // Implement this

type UserData = ExtractData<ReturnType<typeof fetchUser>>;
// Expected: { name: string; age: number }
```

### **Goal:**

Unwrap Promise → unwrap Result → extract inner `data` type.

---

# Want solutions too?

I can provide **step-by-step solutions**, add **more challenges (intermediate → advanced)**, or turn these into a **carousel with your writing style**.
