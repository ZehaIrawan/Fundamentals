

# ✅ **1. Run TypeScript directly with `ts-node` (fastest & easiest)**

Perfect for learning, scripts, prototypes.

### **Install**

```bash
npm install -D ts-node typescript
```

### **Initialize TS config**

```bash
npx tsc --init
```

### **Run your .ts file**

```bash
npx ts-node src/index.ts
npx ts-node challenges/index.ts
```

Done. No build step.

---

# ✅ **2. Compile TypeScript to JavaScript and run with Node**

Production-friendly. You generate JS outputs first.

### **Install**

```bash
npm install -D typescript
```

### **Initialize TS config**

```bash
npx tsc --init
```

### **Compile**

```bash
npx tsc
```

This creates a `/dist` folder.

### **Run**

```bash
node dist/index.js
```

---

# ✅ **3. Use Node’s built-in TypeScript loader (Node 20+)**

Node can run TS with `node --loader`, no extra tools.

### **Run**

```bash
node --loader ts-node/esm src/index.ts
```

Or using the new built-in Node loader:

```bash
node --experimental-strip-types src/index.ts
```

> ⚠️ Built-in support is still experimental, but improving quickly.

---

# 💡 Recommended setup for real projects

Use this combo:

* **ts-node** for development
* **tsc build** for production
* **ESM or CommonJS based on your project**
* **nodemon** for hot reload

### Example dev script:

```json
{
  "scripts": {
    "dev": "nodemon --exec ts-node src/index.ts"
  }
}
```

---

# If you want, I can generate a complete starter template:

✅ tsconfig optimized
✅ nodemon setup
✅ folder structure
✅ example TypeScript code
Just say: **“generate TS starter project”**.
