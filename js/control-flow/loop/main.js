const readline = require('readline/promises')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let name = "";

while (!name) {
  name = await rl.question("Who are you? ");
  if (!name) console.log("Please enter something.");
}

console.log(`Hey there ${name}!`);
rl.close();
