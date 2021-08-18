function updateProductNumber(product, price, isIncresing){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if(isIncresing == true){
        productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    } 
    productInput.value = productNumber;
    // update  total 
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    // calculate total 
    calculateTotal();
};

function getInputValue(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
};

function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const taxAmount = subTotal / 10;
    const totalPrice = subTotal + taxAmount;

    // update on the html
    document.getElementById('sub-total').innerText= subTotal;
    document.getElementById('tax-amount').innerText = taxAmount;
    document.getElementById('total-price').innerText = totalPrice;
};
// ***********phone increase decrease events***********
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, true);
});

document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, false);
});

// ************ case increase decrease evens ***********

// get and call case plus button 
document.getElementById('case-plus').addEventListener('click', function(){
    
    updateProductNumber('case', 59, true)
});

// get case minus button id 
document.getElementById('case-minus').addEventListener('click', function(){

    updateProductNumber('case', 59, false);
});