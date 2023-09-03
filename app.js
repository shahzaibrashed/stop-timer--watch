//--------------------Timer------------------------------------------------------------------------------------------------------------------
var timgetmiliseconds = document.getElementById("timmiliSec");
var timgetseconds = document.getElementById("timseconds");
var timgetminutes = document.getElementById("timminutes");
var timms = 100;
var timsec = 59;
var timmin = 5;
var timinterval;

function timstopWatch() {
  timgetminutes.innerHTML = "04"
  timms--;
  timgetmiliseconds.innerHTML = timms;

  if (timms <= 0) {
    timsec--;
    timgetseconds.innerHTML = timsec;
    timms = 100;
  }
  else if (timsec <= 0) {
    timmin--;
    timgetminutes.innerHTML = timmin;
    timsec = 59;
  }
}

var btnStart = document.getElementById("btn-start");
var btnStop = document.getElementById("btn-stop");
var btnReset = document.getElementById("btn-reset");


function timer() {
  timinterval = setInterval(timstopWatch, 5);
  btnStart.style.display = "none";
  btnStop.style.display = "inline-block";
  btnReset.style.display = "inline-block";
}

function timstop() {
  clearInterval(timinterval);
  btnStart.style.display = "inline-block";
  btnStop.style.display = "none";
  btnReset.style.display = "inline-block";
}

function timreset() {

  timms = 0;
  timsec = 0;
  timmin = 5;
  timinterval;
  timgetmiliseconds.innerHTML = "00";
  timgetseconds.innerHTML = "00";
  timgetminutes.innerHTML = "05";
  timstop();
  btnStart.style.display = "inline-block";
  btnStop.style.display = "none";
  btnReset.style.display = "none";
  

}

//stop watch

var min=document.getElementById("min");
var sec=document.getElementById("sec");
var msec=document.getElementById("msec");

var interval;
var m=0;
var s=0;
var ms=0;
 
var startDisplay=document.getElementById("start");
var stopDisplay=document.getElementById("stop");
var resetDisplay=document.getElementById("reset");

function start()
{
   interval=setInterval(function()
   {

       ms++;
       msec.innerHTML=ms ;
       if (ms===100)
       {
           s++;
           sec.innerHTML=s;
           ms=0;
       }
        else if (s===60)
        {
           m++;
           min.innerHTML=m;
           s=0;
        }  
   },10)
   startDisplay.style.display ="none";
   stopDisplay.style.display = "inline-block";
   resetDisplay.style.display = "inline-block";
   start.Disable = "true";

}


function stop()
{
   clearInterval(interval);
   startDisplay.style.display ="inline-block";
   stopDisplay.style.display = "none";
   resetDisplay.style.display = "inline-block";
   stop.Disable = "true";
}


function reset()
{
   m=0;//reinitialize to zero as we want to reset
   s=0;//reinitialize to zero as we want to reset
   ms=0;//reinitialize to zero as we want to reset
   min.innerHTML=m+"0";
   sec.innerHTML=s+"0" ;//to remove the previous value of seconds
   msec.innerHTML=ms+"0";
   stop();
   startDisplay.style.display ="inline-block";
   stopDisplay.style.display = "none";
   resetDisplay.style.display = "none";
   reset.Disable = "true"
}
