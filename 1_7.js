/*console.log("hello world");

var a = 200;
console.log(a)

function  abc(param) {

    console.log("abc")
    console.log(param);


  }


setTimeout(() => {

    console.log("setTimeout called");
    abc("param from setTimeout");
    console.log("setTimeout finished");

}, 0);



  abc("without setTimeout");



/* GEC --> global Execution Context
  memory allocated for the code
  execution context is created
    code is executed line by line
  memory is allocated for variables and function declarations
    code is executed line by line

    memory allocation phase
    execution phase



    
    */








/*let b = 10;
console.log(b);
b = "hello";
console.log(b);*/






// lexical environment // lexical environment is the environment in which a function is defined
// closure // closure is a function that has access to its own scope, the outer function's scope, and the global scope
//lexical scope // lexical scope is the scope in which a function is defined, not where it is called
function outer() {
    let a = 10;
    function inner() {
        let b = 20;
        console.log(a + b);
    }
    inner();
}
outer();




















