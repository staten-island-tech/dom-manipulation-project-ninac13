//Create an object called “DOMSelectors” to hold your DOM Selectors
const DOMSelectors = {
    form: document.querySelector(".form"),
    imageInput: document.querySelector(".image-input"),
    cardHeaderInput: document.querySelector(".card-header-input"),
    cardDescInput: document.querySelector(".card-desc-input"),
    container: document.querySelector(".container"),
};

//-Create a function that injects the newly created object into the DOM
function createCardObject() {
    return {
        imageUrl: DOMSelectors.imageInput.value,
        cardHeaderText: DOMSelectors.cardHeaderInput.value,
        cardDescText: DOMSelectors.cardDescInput.value
    };
}

//Create a function that clears the input fields after injecting the object
DOMSelectors.form.addEventListener("submit", function (event){
    event.preventDefault();
    // Create the card object
    const cardObject = createCardObject(); 
    
    // Create and inject the card into the DOM using the object
    const card = createCard(cardObject);
    DOMSelectors.container.appendChild(card);

    // Clear the input fields
    DOMSelectors.imageInput.value = '';
    DOMSelectors.cardHeaderInput.value = '';
    DOMSelectors.cardDescInput.value = '';
});

//Create a function that creates an object and calls the following functions
// Function to create a card
function createCard(cardObject) {
    const card = document.createElement('div');
    card.classList.add('card'); //adds 'card' into the classes
    card.style.display = 'flex'; // makes the card appear in flex format

    // Create and append card elements using the object properties
    const cardHeader = createCardHeader(cardObject.cardHeaderText);
    const cardImage = createCardImage(cardObject.imageUrl);
    const cardDesc = createCardText(cardObject.cardDescText);
    const removeButton = createRemoveBtn();

    // Append elements to the card
    card.appendChild(cardHeader);
    card.appendChild(cardImage);
    card.appendChild(cardDesc);
    card.appendChild(removeButton);

    // Add an event listener for the remove button
    removeButton.addEventListener("click", function() {
        card.remove();
    });

    return card; // Return the card element
}

//function creates card header
function createCardHeader(cardHeaderText){
    const cardHeader = document.createElement('h2');
    cardHeader.classList.add('card-header');
    cardHeader.textContent = cardHeaderText;
    return cardHeader;
}

//function creates a card image
function createCardImage(imageUrl){
    const cardImage = document.createElement('img');
    cardImage.classList.add('card-img');
    cardImage.src = imageUrl;
    return cardImage;
}

//function creates a card description
function createCardText(cardDescText){
    const cardDesc = document.createElement('h3');
    cardDesc.classList.add('card-desc');
    cardDesc.textContent = cardDescText;
    return cardDesc;
}

//Create a function to remove an object after they have been created
//function creates a remove button
function createRemoveBtn(){
    const removeButton = document.createElement('button');
    removeButton.classList.add('removebtn');
    removeButton.textContent = 'Remove';
    return removeButton;
}