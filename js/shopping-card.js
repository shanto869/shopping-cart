

// add click even listerer for the phone plus button
document.getElementById('btn-phone-plus').addEventListener('click', function(){
    updatePhonePrice(true)

    // const phone total price
    calculateSubTotal()
})

// add click even listerer for the phone minus button
document.getElementById('btn-phone-minus').addEventListener('click', function(){
    updatePhonePrice(false);
    calculateSubTotal()


})

// add click event listener for the case plus button
document.getElementById('btn-case-plus').addEventListener('click', function(){
    updateCasePrice(true);
    calculateSubTotal()


})

// add click event listener for the case minus button
document.getElementById('btn-case-minus').addEventListener('click', function(){
    updateCasePrice(false)
    calculateSubTotal()

})

// calculate subtotal 
