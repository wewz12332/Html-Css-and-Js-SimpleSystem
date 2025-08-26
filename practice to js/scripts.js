const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");

const min = 1;
const max = 10;
let randomNum;

myButton.onclick = function(){

    randomNum = Math.floor(Math.random() * max) + min;
    myLabel.textContent = randomNum;

while(true){
        const displayNum = Number(document.getElementById("display").value);
    
        if (randomNum === displayNum){
        window.alert("You guess the right number!");
        break;
    }  else {
            window.alert("Try again!!!")
            break;
        }
    }
}