//reduce
//reduce takes an accumulator parameter

var totalCost = affordableWithTax.reduce(function(total, itemPrice){
  console.log
  return total
});

//PROMISES represent an event might or might not have happened yet.  As such a promise
//can be in one of three states:

const myPromise = new Promise((fulfill, reject) => {
    if (Math.random() > 0.5) {
      fulfill();
    } else {
      reject();
    }
});



console.log(myPromise)

//The promise above is set up to resolve whenever the result of Math.random() is greater
//than .5, and will reject the promise if it is less than or equal to.
//.then for happy path, .catch for sad path.  reason is in java, handling errors is called catching errors.

myPromise
    .then(() => console.log)

//handle sad path to inform user what is going on instead of just loading.  think of it from design and usability.
//always use json. 