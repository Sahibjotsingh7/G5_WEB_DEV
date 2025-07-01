//higher order functions
// higher order functions are functions that take other functions as arguments or return a function as a result
// fist class citizens of the language
// example  map, filter, reduce  

/*function  calculate(param) {  
  console.log("calculate called");  
  param();


}



var sumoftwo = function() {
  console.log("sum of two called");
};


calculate(sumoftwo);*/





/*function calculate(param,a,b) {
    console.log("calculate called");
     return param(a,b);
    }

 function sumoftwo(a,b) { 
    console.log("sum of two called");
    return a + b;
 }
 
 function multiplytwo(a,b) {
    console.log("multiply two called")
    return a * b;
 };

console.log(calculate(sumoftwo, 10, 20));
console.log(calculate(multiplytwo, 10, 20));*/


students = [
    { name: "ram", id: 1, age: 20, fee: 10000 },
    { name: "sham", id: 2, age: 22, fee: 20000 },
    { name: "raj", id: 3, age: 21, fee: 30000 }
];



function Student_main( anyfunc, id){
   return anyfunc(id);
}

    


function Studentfee(id){
   for (let index = 0; index < students.length; index++) {
         const student = students[index];
         if (student.id === id) {
              return student.fee;
         }
    
   }
   
}


function StudentEMI(id) {
   const fee = Studentfee(id);
   if (fee) {
       const emi = fee / 10;
       return emi;
   }
   return null;
}


function welcomeStudent(id) {
   console.log(`Welcome ${students.find(student => student.id === id).name}`);
}
   

console.log(Student_main(welcomeStudent, 1))
console.log(Student_main(Studentfee,1 ))
console.log(Student_main(StudentEMI, 1));



