let pop = document.getElementById("popwin");

function openPop(){
  pop.style.display = "block";  
}


function popClose(){
    pop.style.display = "none";
}

let moving = false;
let movingBack = false;
let t;

function SMove(){
  if (movingBack == true){
    clearInterval(t);
    movingBack = false;
    v = 0;
    document.getElementById("stop").style.display = "none"; 
   }
  if (moving == false){
  moving = true;
  t = setInterval(Move,10);
document.getElementById("stop").style.display = "block";
}

}

let pos = -150;
let v = 0;
let box = document.getElementById("box");

function Move(){
  v += 0.05;
  pos += v;
  box.style.left = pos+"px";
  if (pos >= 1000){
    document.getElementById("back").style.display = "block";
  }
}

function Stop(){
  if (moving == true){
   clearInterval(t);
   moving = false;
   v = 0;
   document.getElementById("stop").style.display = "none"; 
  }
  if (movingBack == true){
    clearInterval(t);
    movingBack = false;
    v = 0;
    document.getElementById("stop").style.display = "none"; 
   }
}

function SBack(){
  if (moving == true){
    clearInterval(t);
    moving = false;
    v = 0;
    document.getElementById("stop").style.display = "none"; 
   }
  if (movingBack == false){
  movingBack = true;
  t = setInterval(Back,10);
document.getElementById("stop").style.display = "block";
}
}

function Back(){
  v += 0.05;
  pos -= v;
  box.style.left = pos+"px";
}