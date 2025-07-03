// callback hell example
// callback functions are functions that are passed as arguments to other functions and are executed after the completion of the first function
// callback hell is a situation where multiple callback functions are nested inside each other, making the code difficult to read and maintain
// Callback hell example
function walkinres(cb) {
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