const DOMSelectors = {
    header: document.querySelector("h1"),
    item: document.querySelector("li"),
    cardHeader: document.querySelector(".card-header"),
    card: document.querySelector(".card"),
    cardPrice: document.querySelector(".card-price"),
    removeButton: document.querySelector(".removebtn"),
    form: document.querySelector(".form"),
};

DOMSelectors.form.addEventListener("submit", function (event){
    event.preventDefault();
    console.log(document.querySelector("input").value);
});
//create another function that can connect the user's 3 inputs to the background image/header/price of the card
//create a function in that this can remove the card's background image, header, and price
function removeCard(){
    DOMSelectors.card.remove();
}

// Call removeCard function when the remove button is clicked
DOMSelectors.removeButton.addEventListener("click", function() {
    removeCard();
});