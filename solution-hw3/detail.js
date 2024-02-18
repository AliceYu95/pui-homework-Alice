
function glazingChange() {
    // get value of selected glazing option
    const glazingOptions = document.querySelector('#glazingOptions');
    const priceChange = glazingOptions.value;
    const defaultPrice = 2.49;
    
    const glazingPrices = {
        "keep original": 0.00,
        "sugar milk": 0.00,
        "vanilla milk": 0.50,
        "double chocolate": 1.50
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
