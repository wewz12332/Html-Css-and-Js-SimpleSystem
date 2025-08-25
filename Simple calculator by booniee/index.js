function appendDisplay(value){
    document.getElementById("display").value += value;
}
function calculate(){

    let calculation = document.getElementById("display").value;
    
    try{
        document.getElementById("display").value = eval(calculation);
    } catch {
        document.getElementById("display").value = "Error!";
    }
}

function clearDisplay(){
    document.getElementById("display").value = "";
}
function decreaseDisplay(){
    document.getElementById("display").value;
    display.value = display.value.slice(0, -1);
}