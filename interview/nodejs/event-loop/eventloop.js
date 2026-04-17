console.log("1) start");

setTimeout(() => {
    console.log("4) setTimeout callback");
}, 0);

Promise.resolve().then(() => {
    console.log("3) promise then");
});

console.log("2) end");