// promises 
// promises are used to handle asynchronous operations in JavaScript
// a promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value

// a promise can be in one of three states: pending, fulfilled, or rejected
// a promise is created using the Promise constructor, which takes a function as an argument

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true; 
    if (success) {
      resolve("I am Placed");
    } else {
      reject("opps!");
    }
  }, 1000);
});

const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true; 
        if (success) {
        resolve("enjoy!");
        } else {
        reject("opps!");
        }
    }, 1000);
});

const myPromise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true; 
        if (success) {
        resolve("work");
        } else {
        reject("opps!");
        }
    }, 1000);
} );


const myPromise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true; 
        if (success) {
        resolve("again work");
        } else {
        reject("layoff");
        }
    }, 1000);
});


/*myPromise
   .then((result) => {

        console.log(result);
        return myPromise2;
    })
   .then((result) => {
       console.log(result);
       return myPromise3;
   })
   .then((result) => {
       console.log(result);
       return myPromise4;
   })
   .then((result) => {
       console.log(result);
   })
   .catch((error) => {
       console.error(error);
   });*/

   Promise.all([myPromise, myPromise2, myPromise3, myPromise4])
       .then((results) => {
           results.forEach((result) => {
               console.log(result);
           });
       })
       .catch((error) => {
           console.error(error);
       });