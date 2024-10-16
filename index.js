//NOTES:
//change background + style
const DOMSelectors = {
    form: document.querySelector(".form"),
    imageInput: document.querySelector(".image-input"), // Add input selectors
    cardHeaderInput: document.querySelector(".card-header-input"),
    cardDescInput: document.querySelector(".card-desc-input"),
    container: document.querySelector(".container"),
};

DOMSelectors.form.addEventListener("submit", function (event){
    event.preventDefault();
    //variables capture input values
    const imageUrl = DOMSelectors.imageInput.value;
    const cardHeaderText = DOMSelectors.cardHeaderInput.value;
    const cardDescText = DOMSelectors.cardDescInput.value;

    //individual values are logged, $ sign is used to define that variable's data type as a string
    console.log(`Image URL: ${imageUrl}, Card Header: ${cardHeaderText}, Card Desc: ${cardDescText}`);
    
    //creates a card using updated image, card headers, and card descriptions
    const card = createCard(imageUrl, cardHeaderText, cardDescText);
    DOMSelectors.container.appendChild(card);

    DOMSelectors.imageInput.value = '';
    DOMSelectors.cardHeaderInput.value = '';
    DOMSelectors.cardDescInput.value = '';
});

// Function to create a card
function createCard(imageUrl, cardHeaderText, cardDescText) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.display = 'flex'; // Show the card

    // Create and append card elements
    const cardHeader = createCardHeader(cardHeaderText);
    const cardImage = createCardImage(imageUrl);
    const cardDesc = createCardText(cardDescText);
    const removeButton = createRemoveBtn();

    // Append elements to the card
    card.appendChild(cardHeader);
    card.appendChild(cardImage);
    card.appendChild(cardDesc);
    card.appendChild(removeButton);

    // Add event listener for the remove button
    removeButton.addEventListener("click", function() {
        card.remove();
    });

    return card; // Return the card element
}

function createCardHeader(cardHeaderText){
    const cardHeader = document.createElement('h2');
    cardHeader.classList.add('card-header');
    cardHeader.textContent = cardHeaderText;
    return cardHeader;
}

function createCardImage(imageUrl){
    const cardImage = document.createElement('img');
    cardImage.classList.add('card-img');
    cardImage.src = imageUrl;
    cardImage.alt = imageUrl; // remove see what happens
    return cardImage;
}

function createCardText(cardDescText){
    const cardDesc = document.createElement('h3');
    cardDesc.classList.add('card-desc');
    cardDesc.textContent = cardDescText;
    return cardDesc;
}

function createRemoveBtn(){
    const removeButton = document.createElement('button');
    removeButton.classList.add('removebtn');
    removeButton.textContent = 'Remove';
    return removeButton;
}