
// update total phone price function
function updatePhonePrice(isIncrease){
    // step-1: get the value of phone number field
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    // step-2: get the value of new phone number
    let newPhoneNumber;
    if(isIncrease === true){
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else{
        newPhoneNumber = previousPhoneNumber - 1;
    }
    // step-3: set the new phone number of phone num field
    phoneNumberField.value = newPhoneNumber;

    // step-4: get the total phone price
    const totalPhonePrice = newPhoneNumber * 1219;

    // step-5: set the total price 
    const totalPriceElement = document.getElementById('total-phone-price');
    totalPriceElement.innerText = totalPhonePrice;
}

// update total case price function
function updateCasePrice(isIncrease){
    // step-1: get the case field value
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    // step-2: get new case number
    let newCaseNumber;
    if(isIncrease === true){
        newCaseNumber = previousCaseNumber + 1;
    }
    else{
        newCaseNumber = previousCaseNumber - 1;
    }
    // step-3: set new case number of the case field
    caseNumberField.value = newCaseNumber;

    // setp-4: get total case price
    const totalCasePrice = newCaseNumber * 59;

    // step-5: set total case price 
    const totalPriceElement = document.getElementById('total-case-price');
    totalPriceElement.innerText = totalCasePrice;
}

// get the value of the text element function
function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementPriceString = element.innerText;
    const elementPrice = parseInt(elementPriceString);
    return elementPrice;
}

// set the value of the text element function
function setTextValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

// total price function
function totalPrice(){
    const currentPhonePrice = getTextElementValueById('total-phone-price');
    const currentCasePrice = getTextElementValueById('total-case-price');
    // phone and case total price
    const currentTotalPrice = currentPhonePrice + currentCasePrice;

    // set the current sub total price 
    const subTotalPrice = setTextValueById('sub-total', currentTotalPrice);

    // calculat tax 
    const taxAmountString = (currentTotalPrice * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);

    // set taxt amount 
    setTextValueById('tax-amount', taxAmount);

    // total price amount 
    const finalAmount = currentTotalPrice + taxAmount;
    setTextValueById('final-total', finalAmount)
}