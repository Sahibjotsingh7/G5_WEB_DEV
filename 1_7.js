console.log("hello world");

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








let b = 10;
console.log(b);
b = "hello";
console.log(b);

var c = 0100;
console.log(c); // 






























