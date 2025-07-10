// event listener for the button
// using single event listener for the multiple child cards on a single parent container is called event delegation

const newEle = document.createElement('div');
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
});



// event delegation allows us to add a single event listener to a parent element
//  make a search bar event delegation to avoid excesive api calls using set timeout or set timeinterval;


