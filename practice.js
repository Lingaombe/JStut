const myPromise = new Promise(function(resolve, reject){
    const a = 10
    const b = 10

    setTimeout((a, b) => {
        if(a==b){
            resolve("resolved")
        }else{
            reject("rejected")
        }
    }, 2000);
})

myPromise.then((result)=>{
    console.log(result)
})
console.log("here before you")