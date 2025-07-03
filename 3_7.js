// callback hell example
// callback functions are functions that are passed as arguments to other functions and are executed after the completion of the first function

function walkinres(cb) {
  console.log("walkinres called");
  setTimeout(cb,3000);
}


function checkmenu(cb) {
  console.log("checkmenu called");
  setTimeout(cb,5000);
}

function orderfood(cb) {
  console.log("orderfood called");
  setTimeout(cb,2000);
}

function havingfood(cb) {
  console.log("havingfood called");
  setTimeout(cb,3000);
}


function paybill(cb) {
    console.log("paybill called");
    setTimeout(cb,1000);
    }



    
