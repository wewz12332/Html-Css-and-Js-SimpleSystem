function calc(op) {
    let n1 = +document.getElementById("num1").value;
    let n2 = +document.getElementById("num2").value;
    let res = "Invalid";

    if (op === "+") res = n1 + n2;
    if (op === "-") res = n1 - n2;
    if (op === "*") res = n1 * n2;
    if (op === "/") res = n2 !== 0 ? n1 / n2 : "Error";

    document.getElementById("result").innerText = "Result: " + res;
  }

function reset(){
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").innerText = "";
}