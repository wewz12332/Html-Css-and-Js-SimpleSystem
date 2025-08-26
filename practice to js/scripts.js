const display = document.getElementById("display");
const mySubmit = document.getElementById("mySubmit");
const result = document.getElementById("result");

let bmi = 0;


mySubmit.onclick = function(){
    bmi = display.value;
    bmi = Number(bmi);

    if (bmi < 18.5){
        result.textContent = "You are Under Weight!";
    } else if (bmi >= 18.5 && bmi <= 24.9){
        result.textContent = "You are Normal Weight!";
    } else if (bmi >= 25.0 && bmi <= 29.9){
        result.textContent = "You are Over Weight!";
    } else if (bmi >= 30.0 && bmi <= 34.9){
        result.textContent = "You are Obese!";
    } else if (bmi >= 35.0){
        result.textContent = "You are Extremely Obese!";
    } else {
        bmi = NaN;
        result.textContent = "Numbers Only";
    }
}