// update phone price 
function updatePhonePrice(isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const PreviousPhoneNumber = parseInt(phoneNumberString);

    let newPhoneNumber;
    if(isIncrease === true){
        newPhoneNumber = PreviousPhoneNumber + 1;
    }
    else{
        newPhoneNumber = PreviousPhoneNumber - 1;
    }
    // set the current phone number
    phoneNumberField.value = newPhoneNumber;

    // get the total price
    const totalPhonePrice = newPhoneNumber * 1219;
    // set the total price
    const totalPriceElement = document.getElementById('total-phone-price');
    totalPriceElement.innerText = totalPhonePrice;
}

// update casing price 
function updateCasePrice(isIncrease){
    // get the case number field value
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const PreviousCaseNumber = parseInt(caseNumberString);

    let newCaseNumber;
    if(isIncrease === true){
        newCaseNumber = PreviousCaseNumber + 1;
    }
    else{
        newCaseNumber = PreviousCaseNumber - 1;
    }
    // set the current case number 
    caseNumberField.value = newCaseNumber;

    // get the total case price 
    const totalCasePrice = newCaseNumber * 59;

    // set the total case price 
    const totalPriceElement = document.getElementById('total-case-price');
    totalPriceElement.innerText = totalCasePrice;
}

// get text element value by id 
function getTextElementValueById(elementId){
    const totalElement = document.getElementById(elementId);
    const totalString = totalElement.innerText;
    const totalPrice = parseInt(totalString);             
    return totalPrice;
}

// set text element value by id 
function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

// calculate sub total
function calculateSubTotal(){
    
    const currentPhoneTotal = getTextElementValueById('total-phone-price');
    const currentCaseTotal = getTextElementValueById('total-case-price');
    const currentSubtotal = currentPhoneTotal + currentCaseTotal;

    const subtotalElement = document.getElementById('sub-total');
    subtotalElement.innerText = currentSubtotal;

    // calculate tax 
    const taxAmountString = (currentSubtotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax-amount', taxAmount);

    // final price
    const finalAmount = currentSubtotal + taxAmount;
    setTextElementValueById('final-total', finalAmount)
}