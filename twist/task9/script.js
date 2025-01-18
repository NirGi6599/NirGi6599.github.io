// JavaScript source code


function Plus(){
var x =document.getElementById("num1").value;
var y = document.getElementById("num2").value;
var res = document.getElementById("res");
x = Number(x);
y = Number(y);
if (!isNaN(x) && !isNaN(y)){
res.innerText = (x+y);}
else{
    alert ("You can only write numbers, Wiseguy")
}
}


function Minus(){
var x =document.getElementById("num1").value;
var y = document.getElementById("num2").value;
var res = document.getElementById("res");
x = Number(x);
y = Number(y);
if (!isNaN(x) && !isNaN(y)){
    res.innerText = (x-y);}
else{
        alert ("You can only write numbers, Wiseguy")
}
}

function Multi(){
var x =document.getElementById("num1").value;
var y = document.getElementById("num2").value;
var res = document.getElementById("res");
x = Number(x);
y = Number(y);
if (!isNaN(x) && !isNaN(y)){
    res.innerText = (x*y);}
else{
        alert ("You can only write numbers, Wiseguy")
}
}

function Divide(){
var x =document.getElementById("num1").value;
var y = document.getElementById("num2").value;
var res = document.getElementById("res");
x = Number(x);
y = Number(y);
if (y==0){
    alert ("Dont you dare divide by 0, you imbecile") 
}
else if (!isNaN(x) && !isNaN(y)){
    res.innerText = (x/y);}
    else{
        alert ("You can only write numbers, Wiseguy")
}
}