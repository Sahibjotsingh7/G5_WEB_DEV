// callback hell example
// callback functions are functions that are passed as arguments to other functions and are executed after the completion of the first function
// callback hell is a situation where multiple callback functions are nested inside each other, making the code difficult to read and maintain
// Callback hell example
/*function walkinres(cb) {
  console.log("walkinres called");
  setTimeout(() => {
    console.log("walkinres completed");
    cb();
  }, 3000);
}

function checkmenu(cb) {
  console.log("checkmenu called");
  setTimeout(() => {
    console.log("checkmenu completed");
    cb();
  }, 5000);
}

function orderfood(cb) {
  console.log("orderfood called");
  setTimeout(() => {
    console.log("orderfood completed");
    cb();
  }, 2000);
}

function havingfood(cb) {
  console.log("havingfood called");
  setTimeout(() => {
    console.log("havingfood completed");
    cb();
  }, 3000);
}

function paybill(cb) {
  console.log("paybill called");
  setTimeout(() => {
    console.log("paybill completed");
    cb();
  }, 1000);
}

// Callback hell: Nested callbacks
console.log("Callback hell example started");
walkinres(() => {
  checkmenu(() => {
    orderfood(() => {
      havingfood(() => {
        paybill(() => {
          console.log("Callback hell example completed");
        });
      });
    });
  });
});


// without arrow functions

function walkinres(cb) {
    console.log("walkinres called");
    setTimeout(function() {
        console.log("walkinres completed");
        cb();
    }, 3000);
    }

  function checkmenu(cb) {  
    console.log("checkmenu called");
    setTimeout(function() {
        console.log("checkmenu completed");
        cb();
    }, 5000);


    }

    function orderfood(cb) {
        console.log("orderfood called");
        setTimeout(function() {
            console.log("orderfood completed");
            cb();
        }, 2000);
    }

    function havingfood(cb) {
        console.log("havingfood called");
        setTimeout(function() {
            console.log("havingfood completed");
            cb();
        }, 3000);
    }

    function paybill(cb) {
        console.log("paybill called");
        setTimeout(function() {
            console.log("paybill completed");
            cb();
        }, 1000);
    }

// Callback hell: Nested callbacks without arrow functions

console.log("Callback hell example started without arrow functions");


walkinres(function() {
    checkmenu(function() {
        orderfood(function() {
            havingfood(function() {
                paybill(function() {
                    console.log("Callback hell example completed without arrow functions");
                });
            });
        });
    });
})*/



const cart = ["apple", "banana", "orange", "grape", "kiwi" , "mango", "pineapple", "strawberry", "blueberry", "watermelon"];

function createOrder(cartItems , callback) {
   let prize = 100;
   let totalPrize = cartItems.length * prize;
    let randomorderId = Math.floor(Math.random() * 10000);
    console.log("Order ID: " + randomorderId);
    console.log("Order created with items: " + cartItems.join(", "));
    console.log("Total prize: " + totalPrize);
    callback(totalPrize, randomorderId);
     
    
    
}

function placeOrder(totalPrize , randomorderId , callback) {
    console.log("Placing order for Order ID: " + randomorderId + " with total prize: " + totalPrize);
    setTimeout(() => {
        console.log("Order placed successfully!");
        callback(totalPrize, randomorderId);
    }, 2000);
    
}

function orderPayment(totalPrize, randomorderId, callback) {
    console.log("Processing payment for Order ID: " + randomorderId + " with total prize: " + totalPrize);
    setTimeout(() => {
        console.log("Payment successful for Order ID: " + randomorderId);
        callback(totalPrize, randomorderId);
    }, 3000);
}

function orderstatus(randomorderId, callback) {
    console.log("Checking order status for Order ID: " + randomorderId);
    setTimeout(() => {
        console.log("Order ID: " + randomorderId  );
        console.log("payment successful");
        console.log("Order status: Your order is being prepared and will be ready for delivery soon.");
        callback(randomorderId);
    }, 4000);
}


createOrder(cart, (totalPrize, randomorderId ) => {
    placeOrder(totalPrize, randomorderId, () => {
        orderPayment(totalPrize, randomorderId, () => {
            orderstatus(randomorderId, () => {
                console.log("All operations completed successfully.");
            });
        });
    });
});



    
    