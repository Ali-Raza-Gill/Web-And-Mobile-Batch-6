
function appendNumber(num) {
    document.getElementById("result").value +=num;   
}
function appendOperator(op) {
    document.getElementById("result").value +=op;
}
// function clearResult() {
//     document.getElementById("result").value = "";
// }
function clearresult() {
    document.getElementById("result").value="";
}
function calculate() {
    let result = document.getElementById("result").value;


try {
    let answer = eval(result);
    document.getElementById("result").value=answer;
} catch (error) {
    console.log("error:"+error);
    document.getElementById("result").value="Error";
}
}