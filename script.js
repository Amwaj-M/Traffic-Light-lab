let butstop = document.getElementById("stopButton");
let butslow = document.getElementById("slowButton");
let butgo = document.getElementById("goButton");
let stopLight = document.getElementById("stopLight");
let slowLight = document.getElementById("slowLight");
let goLight = document.getElementById("goLight");

function stop () {
    butstop.addEventListener("click",function myFun() {
    light();
     stopLight.style.backgroundColor="red"   
    })
}stop();

function slow () {
    butslow.addEventListener("click",function myFun() {
    light();
    slowLight.style.backgroundColor="yellow"   
    })
}slow();

function go () {
    butgo.addEventListener("click",function myFun() {
    light();
    goLight.style.backgroundColor="green"   
    })
}go();

function light() {
   stopLight.style.backgroundColor = "black";
   slowLight.style.backgroundColor = "black";
   goLight.style.backgroundColor = "black";
  }
