// 4. Keep generating a random number (1–10) until the number equals 5. Print each generated number.


let randomNumber;

function generateNumber(max,min){
  randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
}

// how to loop number
while (randomNumber !== 5) {
  generateNumber(10,1)
  console.log(randomNumber)
}

// Math.round is bad idea
// need to use math floor and math random

// Math.random()         → random decimal (0 to <1)
// * (max - min + 1)     → stretch to correct size
// Math.floor(...)       → remove decimals (get whole numbers)
// + min                 → shift to start at min
