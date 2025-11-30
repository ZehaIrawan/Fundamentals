const promise = new Promise(
  function(resolve, reject){
    setTimeout(()=> reject("failed"),1000)
  }
)