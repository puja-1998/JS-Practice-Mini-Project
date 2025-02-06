let myPromise = new Promise((resolve, reject)=>{
    let success = false;

    if(success){
        resolve("Promise was successfule");
    }else{
        reject("Promise Failed");
    }
})
myPromise
    .then(result=>{
        console.log("promise successful");
        
    })
    .catch(err=>{
        console.log("promise Failed");
        
    })