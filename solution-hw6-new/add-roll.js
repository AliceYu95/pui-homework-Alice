////////////////// Add roll into the cart ///////////////////////

// const cartSet = new Set();
let cartArray = JSON.parse(localStorage.getItem('cart')) || [];

// let cartArray = JSON.parse(localStorage.getItem('cart')) || [];

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}


// function addCart() {
//     const rollType = chosenRoll;
//     const glazingOptions = document.querySelector('#glazingOptions');
//     const selectedGlazingOption = glazingOptions.options[glazingOptions.selectedIndex].text;
//     const packSizeOptions = document.querySelector('#packSizeOptions');
//     const selectedPackOption = packSizeOptions.options[packSizeOptions.selectedIndex].text;

//     const rollInstance = new Roll(rollType, selectedGlazingOption, selectedPackOption, chosenRollInfo.basePrice);
//     cartSet.add(rollInstance);
//     console.log(cartSet)
// }

function addCart() {
    const rollType = chosenRoll;
    const glazingOptions = document.querySelector('#glazingOptions');
    const selectedGlazingOption = glazingOptions.options[glazingOptions.selectedIndex].text;
    const packSizeOptions = document.querySelector('#packSizeOptions');
    const selectedPackOption = packSizeOptions.options[packSizeOptions.selectedIndex].text;

    const rollInstance = new Roll(rollType, selectedGlazingOption, selectedPackOption, chosenRollInfo.basePrice);
    cartSet.add(rollInstance);

    // Save to local storage
    saveCartToLocalStorage();
}

function saveCartToLocalStorage() {
    const cartArray = []; // Initialize empty array
    for (const roll of cartSet) { // Iterate through each 'roll' in 'cartSet'
        // Construct a new object with the properties of 'roll' and add it to 'cartArray'
        const cartItem = {
            type: roll.type,
            glazing: roll.glazing,
            size: roll.size,
            basePrice: roll.basePrice
        };
        cartArray.push(cartItem);
    }
    
    localStorage.setItem('cart', JSON.stringify(cartArray));
}
