
var timer = 60;
var hitrn = 0;
var score = 0;

function increaseScore(){
    score +=10;
    document.querySelector("#scoreval").textContent = score;
}

function getnewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}
function bubbleMaker(){
    var cutter = "";

for(var i = 1; i<=85; i++){
    var rn = Math.floor(Math.random()*10);
    cutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML = cutter;
}

function runTimer(){
   var timerint = setInterval(function(){
        if(timer>0){
            timer --;
            document.querySelector("#timerval").textContent = timer;
        }else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over !</h1>`
        }
       
    },1000)
}

document.querySelector("#pbtm").addEventListener("click",function(dist){
   clickNumber = Number(dist.target.textContent)

   if(clickNumber === hitrn){
    increaseScore();
    bubbleMaker();
    getnewHit();
   }
})
bubbleMaker();
runTimer();
getnewHit();
