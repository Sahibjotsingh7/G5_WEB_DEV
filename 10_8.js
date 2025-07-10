// event listener for the button
// using single event listener for the multiple child cards on a single parent container is called event delegation

/*const newEle = document.createElement('div');
newEle.classList.add('card');
const newChild1 = document.createElement('h1');
newChild1.innerText = "Card 6";
const newChild2 = document.createElement('p');
newChild2.innerText = "this is card sixth";

newEle.appendChild(newChild1);
newEle.appendChild(newChild2);


document.querySelector('#container').appendChild(newEle);

document.querySelector('#container').addEventListener('click', function(event) {
    // check if the clicked element is a card
    if (event.target.classList.contains('card')) {
        // toggle the 'active' class on the clicked card
        event.target.classList.toggle('active');
        console.log('Card clicked:', event.target.innerText);
    }
});*/




// event delegation allows us to add a single event listener to a parent element
//  make a search bar event delegation to avoid excesive api calls using set timeout or set timeinterval;



 /*const searchInput = document.querySelector('#search');

 let timeoutId ;

 searchInput.addEventListener('input', function(event) {
    clearTimeout(timeoutId); // Clear the previous timeout
    timeoutId = setTimeout(() => {
        const searchTerm = event.target.value.toLowerCase();
        console.log('Search Term:', searchTerm);
        // Here you can call your search function or API with the searchTerm
    }, 2000); // Adjust the delay as needed (300ms in this case)
 } );*/


 for (var index = 0; index <=5; index++) {
      setTimeout(() => {
        console.log(index);
      }, 1000); // Delay each log by 1 second multiplied by the index
    
 }

 for (let index = 0; index <=5; index++) {
      setTimeout(() => {
        console.log(index);
      }, 1000); // Delay each log by 1 second multiplied by the index
    
 }