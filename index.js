const DOMSelectors = {
    header: document.querySelector("h1"),
    item: document.querySelector("li"),
    cardHeader: document.querySelector(".card-header"),
    card: document.querySelector(".card"),
    cardPrice: document.querySelector(".card-price"),
    removeButton: document.querySelector(".removebtn"),
    form: document.querySelector(".form"),
    imageInput: document.querySelector(".image-input"), // Add input selectors
    cardHeaderInput: document.querySelector(".card-header-input"),
    cardPriceInput: document.querySelector(".card-price-input"),
};

DOMSelectors.form.addEventListener("submit", function (event){
    event.preventDefault();
    //variables capture input values
    const imageUrl = DOMSelectors.imageInput.value;
    const cardHeaderText = DOMSelectors.cardHeaderInput.value;
    const cardPriceText = DOMSelectors.cardPriceInput.value;

    //individual values are logged
    console.log(`Image URL: ${imageUrl}, Card Header: ${cardHeaderText}, Card Price: ${cardPriceText}`);
    
    //updateCard function is called to update the card
    updateCard(imageUrl, cardHeaderText, cardPriceText);

});

//create another function that can connect the user's 3 inputs to the background image/header/price of the card
function updateCard(imageUrl, cardHeaderText, cardPriceText) {
    // Update the card header, image, and price based on user input
    DOMSelectors.cardHeader.textContent = cardHeaderText;
    DOMSelectors.cardPrice.textContent = cardPriceText;
    DOMSelectors.card.querySelector("img").src = imageUrl;
}

//create a function in that this can remove the card's background image, header, and price
function removeCard(){
    DOMSelectors.card.remove();
}

// Call removeCard function when the remove button is clicked
DOMSelectors.removeButton.addEventListener("click", function() {
    removeCard();
});