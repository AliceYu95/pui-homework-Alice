const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "../assets/products/original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "../assets/products/apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "../assets/products/raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "../assets/products/walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "../assets/products/double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "../assets/products/strawberry-cinnamon-roll.jpg"
    }    
};

///////////////////// Update Image ///////////////////////

const queryString = window.location.search;

const params = new URLSearchParams(queryString);

const chosenRoll = params.get('roll');

const detailImage = document.getElementById('detailImage');

detailImage.src = rolls[chosenRoll].imageFile;


/////////////////// Update text & price ////////////////////////
const chosenRollInfo = rolls[chosenRoll];

const productNameElement = document.getElementById('productName');
productNameElement.textContent = chosenRoll + ' Cinnamon Roll';


const priceElement = document.getElementById('total-price');
priceElement.textContent = '$' + chosenRollInfo.basePrice.toFixed(2);


/////////////////// Change prices based on drop down box //////////////////////////

function glazingChange() {
    // get value of selected glazing option
    const glazingOptions = document.querySelector('#glazingOptions');
    const priceChange = glazingOptions.value;
    const defaultPrice = chosenRollInfo.basePrice;
    
    const glazingPrices = {
        "Keep original": 0.00,
        "Sugar milk": 0.00,
        "Vanilla milk": 0.50,
        "Double chocolate": 1.50
    };

    // get the value of pack size option
    const packSizes = [1, 3, 6, 12]
    const selectedPackSize = document.querySelector('#packSizeOptions').value;

    let newPrice, totalPrice;

    if (priceChange === undefined) {
        newPrice = 0.00;
    } else {
        newPrice = glazingPrices[priceChange];
    }

    if (selectedPackSize === '6') {
        totalPrice = (defaultPrice + newPrice) * 5;
    } else if (selectedPackSize === '12') {
        totalPrice = (defaultPrice + newPrice) * 10;
    } else {
        totalPrice = (defaultPrice + newPrice) * selectedPackSize;
    }
    
    updatePrice(totalPrice);
  }

function updatePrice(totalPrice) {
    const totalPriceElement = document.querySelector('#total-price');
    totalPriceElement.innerText = '$' + totalPrice.toFixed(2);
}

document.querySelector('#glazingOptions').addEventListener('change', glazingChange());
document.querySelector('#packSizeOptions').addEventListener('change', glazingChange());



////////////////// Add roll into the cart ///////////////////////

const cart = [];

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
    const glazingOptions = document.querySelector('#glazingOptions').value;
    const selectedPackSize = document.querySelector('#packSizeOptions').value;

    const rollInstance = new Roll(rollType, glazingOptions, selectedPackSize, chosenRollInfo.basePrice);
    cart.push(rollInstance);
    console.log(cart)
}

