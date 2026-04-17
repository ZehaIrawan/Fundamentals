Node.js is I/O-driven (Streams + Buffers)

Because Node is designed for servers, the core skill is understanding how Node handles data efficiently without loading everything into memory.

Key idea

Instead of doing:

❌ "load the whole file into RAM, then send it"

Node prefers:

✅ "send it chunk by chunk"

That’s a stream.

Why this is fundamental

Because almost everything in Node is streaming:

HTTP requests/responses
file reads/writes
video uploads
logs
piping data between processes
The 2 concepts inside it
Buffer = raw binary chunk of data
Stream = continuous flow of buffers


Do this. It’s the fastest way to *feel* what a stream is.

### ✅ 15-min Exercise: Copy a big file using streams

#### 1. Create a big test file

Run in terminal:

```bash
node -e "require('fs').writeFileSync('big.txt', 'A'.repeat(200_000_000))"
```

(creates ~200MB file)

---

#### 2. Copy it the **bad way** (loads into memory)

Create `copy-bad.js`:

```js
const fs = require("fs");

console.log("Starting bad copy...");

const data = fs.readFileSync("big.txt"); // loads everything into RAM
fs.writeFileSync("big-copy-bad.txt", data);

console.log("Done.");
```

Run:

```bash
node copy-bad.js
```

Watch your RAM usage spike.

---

#### 3. Copy it the **Node way** (streaming)

Create `copy-stream.js`:

```js
const fs = require("fs");

console.log("Starting stream copy...");

const readStream = fs.createReadStream("big.txt");
const writeStream = fs.createWriteStream("big-copy-stream.txt");

readStream.pipe(writeStream);

writeStream.on("finish", () => {
  console.log("Done.");
});
```

Run:

```bash
node copy-stream.js
```

RAM usage stays low.

---

### What you just learned

* `readFileSync()` = **whole file into memory**
* `createReadStream()` = **chunk by chunk**
* `.pipe()` = connects the flow automatically

If you understand this difference, you understand streams.
