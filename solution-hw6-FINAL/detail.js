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



/////////////////// Update text ////////////////////////
const chosenRollInfo = rolls[chosenRoll];

const productNameElement = document.getElementById('productName');
productNameElement.textContent = chosenRoll + ' Cinnamon Roll';

const priceElement = document.getElementById('total-price');
priceElement.textContent = '$' + chosenRollInfo.basePrice.toFixed(2);

/////////////////// Change prices based on drop down box //////////////////////////
let allGlaze = [
    {
        name: "Keep original",
        price: 0.00,
    },
    {
        name: "Sugar milk",
        price: 0.00,
    },
    {
        name: "Vanilla milk",
        price: 0.50,
    },
    {
        name: "Double chocolate",
        price: 1.50,
    }
];

let allPackSize = [
    {
        size: 1,
        price: 1,
    },
    {
        size: 3,
        price: 3,
    },
    {
        size: 6,
        price: 5,
    },
    {
        size: 12,
        price: 10,
    }
];

// Create glazing option
const glazingOptions = document.querySelector('#glazingOptions');
for (let i=0; i<allGlaze.length; i++) {
    let option = document.createElement('option');
    option.text = allGlaze[i].name;
    option.value = allGlaze[i].price;
    glazingOptions.add(option);
}
    
// Create pack size option
const selectedPackSize = document.querySelector('#packSizeOptions');
for (let i=0; i<allPackSize.length; i++) {
    let option = document.createElement('option');
    option.text = allPackSize[i].size;
    option.value = allPackSize[i].price;
    packSizeOptions.add(option);
}

// Set default price
let defaultPrice = chosenRollInfo.basePrice;
let glazingPrice = 0;
let packPrice = 1;
let totalPrice = defaultPrice;


function glazingChange(element) {
    glazingPrice = parseFloat(element.value);
    updatePrice(glazingPrice, packPrice);
}

function packChange(element) {
    packPrice = parseFloat(element.value);
    updatePrice(glazingPrice, packPrice);
}

// Calculate Price
function updatePrice(glazingPrice, packPrice) {
    
    totalPrice = (defaultPrice + glazingPrice)*packPrice;
    const totalPriceElement = document.querySelector('#total-price');
    totalPriceElement.innerText = '$' + totalPrice.toFixed(2);
}




