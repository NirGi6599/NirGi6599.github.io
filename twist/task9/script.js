// JavaScript source code


function Plus(){
var x =document.getElementById("num1").value;
var y = document.getElementById("num2").value;
var res = document.getElementById("res").innerHTML;
x = Number(x);
y = Number(y);
res.innerText = (x+y);
}


function Minus(){
var x =document.getElementById("num1").value;
var y = document.getElementById("num2").value;
x = Number(x);
y = Number(y);
alert (x-y);
}

function Multi(){
var x =document.getElementById("num1").value;
var y = document.getElementById("num2").value;
x = Number(x);
y = Number(y);
alert (x*y);
}

function Divide(){
var x =document.getElementById("num1").value;
var y = document.getElementById("num2").value;
x = Number(x);
y = Number(y);
alert (x/y);
}