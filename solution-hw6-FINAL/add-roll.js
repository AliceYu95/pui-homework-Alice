////////////////// Add roll into the cart ///////////////////////

// const cartSet = new Set();
let cartArray = JSON.parse(localStorage.getItem('cart')) || [];

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

function addCart() {
    const rollType = chosenRoll; 
    const glazingOptions = document.querySelector('#glazingOptions');
    const selectedGlazingOption = glazingOptions.options[glazingOptions.selectedIndex].text;
    const packSizeOptions = document.querySelector('#packSizeOptions');
    const selectedPackOption = packSizeOptions.options[packSizeOptions.selectedIndex].text;
    const basePrice = chosenRollInfo.basePrice; 

    // Create a new instance of 'Roll' with the selected options
    const rollInstance = new Roll(rollType, selectedGlazingOption, selectedPackOption, basePrice);

    // Add this new roll instance to the cart array
    cartArray.push(rollInstance);

    // Save the updated cart array to local storage
    saveCartToLocalStorage();
    updateNum();

}

// Function to save the current state of the cart array to local storage
function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cartArray)); 
    console.log('Current cart:', cartArray);
}

function updateNum() {
    const cartArrayString = localStorage.getItem('cart'); // Get the cart string from local storage
    let cartArray = [];

    // Check if cartArrayString is not null then parse it
    if (cartArrayString) {
        cartArray = JSON.parse(cartArrayString); // Convert the JSON string back to an array
    }

    // Update the cart number
    const cartNum = document.querySelector("#cartNum");
    cartNum.innerText = cartArray.length; // Update the element with the number of items in the cart
    console.log(cartArray)

}

updateNum()