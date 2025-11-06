// Print every key and value in this object:

const profile = { username: "zeha", level: 7, premium: true };

// for(i in profile){
//   console.log(`${i} : ${profile[i]}`)
// }

for(k of profile) {
  console.log(`${k} : ${profile[k]}`)
}