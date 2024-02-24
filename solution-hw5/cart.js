// Define the cart set and roll class
const cartSet = new Set();

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

function addNewRoll(rollType, rollGlazing, packSize, basePrice) {
    const rollInstance = new Roll(rollType, rollGlazing, packSize, basePrice);
    cartSet.add(rollInstance);
    return rollInstance;
}

// Initial four objects in cart
const originalRoll = addNewRoll(
    "Original",
    "Sugar milk",
    1,
    2.49
);

const walnutRoll = addNewRoll(
    "Walnut",
    "Vanilla milk",
    12,
    3.49
);

const raisinRoll = addNewRoll(
    "Raisin",
    "Sugar milk",
    3,
    2.99
);

const appleRoll = addNewRoll(
    "Apple",
    "Original",
    3,
    3.49
);

// Create element and add element
function createElement(roll) {
    const template = document.querySelector('#roll-template');
    
    const clone = template.content.cloneNode(true);

    roll.element = clone.querySelector('.product-single');

    // delete
    const btnDelete = roll.element.querySelector('.image-remove');
    btnDelete.addEventListener('click', () => {
        deleteRoll(roll);
    });

    const rollListElement = document.querySelector('#roll-list');

    rollListElement.append(roll.element);

    updateElement(roll);
    updatePrice(roll);

}

function updateElement(rollInstance) {
    const rollImageElement = rollInstance.element.querySelector('.image-cart');
    const rollNameElement = rollInstance.element.querySelector('#roll-name');
    const rollGlazingElement = rollInstance.element.querySelector('#roll-glazing');
    const rollPackElement = rollInstance.element.querySelector('#roll-pack-size');

    rollImageElement.src = rolls[rollInstance.type].imageFile;
    rollNameElement.innerText = rollInstance.type;
    rollGlazingElement.textContent = `Glazing: ${rollInstance.glazing}`;
    rollPackElement.textContent = `Pack Size: ${rollInstance.size}`;
}

// Calculate each item's price with glaze and pack size
const allGlaze = {
    "Original": 0.00,
    "Sugar milk": 0.00,
    "Vanilla milk": 0.50,
    "Double chocolate": 1.50
};

const allPackSize = {
    1: 1,
    3: 3,
    6: 5,
    12: 10
};

function updatePrice(roll) {
    const basePrice = roll.basePrice;
    const glazingPrice = allGlaze[roll.glazing];
    const packPrice = allPackSize[roll.size]; 

    const totalPrice = (basePrice + glazingPrice) * packPrice;

    const totalPriceElement = roll.element.querySelector('.single-total-price');
    totalPriceElement.innerText = '$' + totalPrice.toFixed(2);

    return totalPrice;
}

// Calculate the final price
function updateTotalPrice(cartSet) {
    let totalPrice = 0;

    for (const roll of cartSet) {
        const singlePrice = updatePrice(roll);

        totalPrice += singlePrice;
    }

    const totalPriceElement = document.querySelector('#total-price');
    totalPriceElement.innerText = '$' + totalPrice.toFixed(2);
}

// Add objects into the set
for (const roll of cartSet) {
    createElement(roll);
}

// Update total price
updateTotalPrice(cartSet);

// Delete item
function deleteRoll(roll) {
    roll.element.remove();
    cartSet.delete(roll);
    updateTotalPrice(cartSet);
}