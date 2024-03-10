// function updateNum() {
//     const cartArray = localStorage.getItem('cart');

//     // cartArray = JSON.parse(cartArrayString);


//     // Update the cart number
//     const cartNum = document.querySelector("#cartNum")
//     console.log(cartArray)
//     console.log(cartArray.length)
//     cartNum.innerText = cartArray.length;
// }

// updateNum();

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