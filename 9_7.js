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