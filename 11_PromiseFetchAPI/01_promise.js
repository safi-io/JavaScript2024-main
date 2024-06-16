/*

A Promise is an object that represents the eventual completion (or failure)
of an asynchronous operation and its resulting value.

    A Promise is in one of these states:
        Pending: The initial state. The operation has not yet completed.
        Fulfilled: The operation completed successfully.
        Rejected: The operation failed.

*/


    // First Syntax

const promiseOne = new Promise( (resolve, reject) => {
    setTimeout(function() {
        let error = true;
        if(!error) {
            resolve(); // Changing state from Pending to Fulfilled
        }else {
            reject(); // Changing State from Pending to Rejected
        }
    }, 1000);
});

promiseOne.then( ()=> {
    console.log("No error Found");
}).catch( ()=> {
    console.log("Error Found");
}).finally( ()=> {
    console.log("First Promise Consumed") // It will run in every Condition
})
    
    // Second Syntax

new Promise( function(resolve) {
    setTimeout(function() {
        console.log("I am from Second Promise");
        resolve();
    },1000)
})
.then(()=> {
    console.log("Consumed Second Promise")
})

    // Third Use-Case

const promiseThree = new Promise( (resolve)=> {
    setTimeout( ()=> {
        resolve({name:'safi', age:'18'});
    }, 1000)
})

promiseThree.then( (dataObj)=> {
    console.log(dataObj.name)
})

    // Async Await

const promiseFour = new Promise( (resolve, reject) => {
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFour() {
    try {
        const response = await promiseFour;
        for (const key in response) {
            console.log(`Key is : ${key} and Value is ${response[key]}`)
        }
    }catch(error) {
        console.log(error)
    }
}

consumePromiseFour();