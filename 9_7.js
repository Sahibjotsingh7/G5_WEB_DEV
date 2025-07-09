// async await
// these are used to handle asynchronous operations in JavaScript
// async functions always return a promise
// await can only be used inside async functions

async function handlePromises() {
    try {
        const result = await someAsyncFunction();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}


//dom
// dom is the document object model
// it represents the structure of a web page
// you can use it to manipulate the content and structure of a page
// it is a tree-like structure where each node represents an element in the page

//event capturing
// event capturing is a phase in the event propagation process
// it allows you to handle events as they travel down the DOM tree

// event bubbling
// event bubbling is a phase in the event propagation process
// it allows you to handle events as they travel up the DOM tree



// call , apply , bind 
// 

function admission( studentZone,  studentCampus){
    console.log(`${this.name} is admitted in ${this.class} successfully at ${studentCampus} in ${studentZone}`  )
}

const student1 = {
     name : "ram",
     class:"g4"
}

const student2 = {
    name : "sham",
    class : "g5"
}

// call is imidaite invoke function

admission.call(student1,"punjab","rajpura");

//aplly same but pass arg as array

admission.apply(student2,["punjab","rajpura"])

// bind same but u have o call the func 

const data = admission.bind(student1,"punjab","rajpura");

data();

