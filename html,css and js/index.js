const decreaseBtn = document.getElementById("btn-decrease");
const resetBtn = document.getElementById("btn-reset");
const increaseBtn = document.getElementById("btn-increase");
const btnAdd = document.getElementById("btn-add")
const btnMinus = document.getElementById("btn-minus")
const countLabel = document.getElementById("countLabel");

let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}
btnAdd.onclick = function(){
    count += 5;
    countLabel.textContent = count;
}
btnMinus.onclick = function(){
    count -= 100;
    countLabel.textContent = count;
}