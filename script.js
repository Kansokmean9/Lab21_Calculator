let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let result = document.getElementById('result');
function mySum(){
    let sum;
    sum = parseFloat(num1.value) + parseFloat(num2.value);
    result.innerHTML = sum || 'input number';
}
function mySub(){
    let sub;
    sub = parseFloat(num1.value) - parseFloat(num2.value);
    result.innerHTML = sub;
}
function myMul(){
    let mul;
    mul = parseFloat(num1.value) * parseFloat(num2.value);
    result.innerHTML = mul;
}
function myDevide(){
    let devide;
    devide = parseFloat(num1.value) / parseFloat(num2.value);
    result.innerHTML = devide;
}
