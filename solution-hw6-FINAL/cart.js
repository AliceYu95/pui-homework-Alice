function addNewRoll(rollType, rollGlazing, packSize, basePrice) {
    const rollInstance = new Roll(rollType, rollGlazing, packSize, basePrice);
    cartArray.append(rollInstance);
    return rollInstance;
}


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
    "Keep original": 0.00,
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

    for (const roll of cartArray) {
        const singlePrice = updatePrice(roll);

        totalPrice += singlePrice;
    }

    const totalPriceElement = document.querySelector('#total-price');
    totalPriceElement.innerText = '$' + totalPrice.toFixed(2);
}

// Add objects into the set
for (const roll of cartArray) {
    createElement(roll);
}

// Update total price
updateTotalPrice(cartArray);

// Delete item
function deleteRoll(roll) {
    // roll.element.remove();
    // cartArray.remove(roll);
    cartArray.splice(index, 1)
    updateTotalPrice(cartSet);
    saveCartToLocalStorage();
}

function submitRoll() {
    const rollElement = addRoll();
    createElement(rollElement); 
  }


function retrieveCartFromLocalStorage() {
    const cartArrayString = localStorage.getItem('cart');
    // if (cartArrayString) {
    // Convert string back to array
    cartArray = JSON.parse(cartArrayString); 
    // cartArray = cartArray.map(item => new Roll(item.type, item.glazing, item.size, item.basePrice)); 
    console.log(cartArray)
    for (const roll of cartArray) {
        
        const roll = addNewRoll(type, tlazing, size, basePrice);
        console.log(roll)
        createElement(roll);
        }
    updateTotalPrice(cartArray);
    // }
}

// Execute this function when the cart page is loaded
if (localStorage.getItem('cart') !== null) {
    retrieveCartFromLocalStorage();
}

console.log(cartSet)