// Producer Code
function demo(){
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve({msg : "SUCCESS"})
      reject({msg : new Error("SOmething bad happened")})
    }, 3000);
  })
  return promise;
}


// Consumer Code

demo().then(
  (response)=>{
    console.log(response);
  },
  (err)=>{
    console.log(err);
  }
  )
