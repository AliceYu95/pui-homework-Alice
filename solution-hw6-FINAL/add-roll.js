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
    const rollType = chosenRoll; // 'chosenRoll' should be defined in your page script, representing the selected roll type
    const glazingOptions = document.querySelector('#glazingOptions');
    const selectedGlazingOption = glazingOptions.options[glazingOptions.selectedIndex].text;
    const packSizeOptions = document.querySelector('#packSizeOptions');
    const selectedPackOption = packSizeOptions.options[packSizeOptions.selectedIndex].text;
    const basePrice = chosenRollInfo.basePrice; // 'chosenRollInfo' should be a reference to the selected roll's information

    // Create a new instance of 'Roll' with the selected options
    const rollInstance = new Roll(rollType, selectedGlazingOption, selectedPackOption, basePrice);

    // Add this new roll instance to the cart array
    cartArray.push(rollInstance);

    // Save the updated cart array to local storage
    saveCartToLocalStorage();

}

// Function to save the current state of the cart array to local storage
function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cartArray)); // Convert cart array to a string and save in local storage
    console.log('Current cart:', cartArray); // Log the cart array to the console for debugging
}
