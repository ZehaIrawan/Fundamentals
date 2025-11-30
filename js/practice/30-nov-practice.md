setTimeout(()=> console.log('after 1 sec'),1000)

// i want to see progress
// use set interval

const promise = new Promise(
  function(resolve, reject){
    setTimeout(()=> reject("failed"),1000)
  }
)

// resolve & eject are callbacks provided by js