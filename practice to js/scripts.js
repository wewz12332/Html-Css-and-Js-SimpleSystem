const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const submitBtn = document.getElementById("submitBtn");
const result = document.getElementById("result");
const paymentResult = document.getElementById("paymentResult");

submitBtn.onclick = function(){

    if(myCheckbox.checked){
        result.textContent = `You are subscribed!`;
    } 
    else {
        result.textContent = `You are NOT Subscribe!`;
    }
    if (visaBtn.checked){
        paymentResult.textContent = `You are paying with Visa!`;
    
    } else if (masterCardBtn.checked){
        paymentResult.textContent = `You are paying with Master Card`;
    
    } else if (paypalBtn.checked){
        paymentResult.textContent = `You are paying with Paypal`;
    
    } else {
        paymentResult.textContent = `You must select a payment type!`;
    }
}