
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

    if (priceChange === undefined) {
        newPrice = 0.00;
    } else {
        newPrice = glazingPrices[priceChange];
    }

    const totalPrice = (defaultPrice + newPrice) * selectedPackSize;
    updatePrice(totalPrice);
  }

function updatePrice(totalPrice) {
    const totalPriceElement = document.querySelector('#total-price');
    totalPriceElement.innerText = '$' + totalPrice.toFixed(2);
}

addEventListener('change', glazingChange());
addEventListener('change', glazingChange());