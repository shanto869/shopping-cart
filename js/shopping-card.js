
// add click event listener for the phone plus btn
document.getElementById('btn-phone-plus').addEventListener('click', function(){

    // get the total phone price by using function
    updatePhonePrice(true);

    // get the total  price by using function
    totalPrice()
})


// add click event listener for the phone minus btn
document.getElementById('btn-phone-minus').addEventListener('click', function(){

    // get the total phone price by using function
    updatePhonePrice(false)

    // get the total  price by using function
    totalPrice()
})


// add click event listener for the case plus btn
document.getElementById('btn-case-plus').addEventListener('click', function(){

    // get the total case price by using function
    updateCasePrice(true);

    // get the total  price by using function
    totalPrice()
})


// add click event listener for the case minus btn
document.getElementById('btn-case-minus').addEventListener('click', function(){

    // get the total case price by using function
    updateCasePrice(false);

    // get the total  price by using function
    totalPrice()
})