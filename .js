window.onload = function startTimer(){ 
minutes = 00;
seconds = 00;
tens = 00; 
var OutputMinutes = document.getElementById("minutes");
var OutputSeconds = document.getElementById("second");
var OutputTens =  document.getElementById("tens");
var buttonStart = document.getElementById("btn-start");
var buttonStop = document.getElementById("btn-stop");
var buttonReset = document.getElementById("btn-reset");
var Interval;

buttonStart.addEventListener('click', () => {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 1);
});

buttonStop.addEventListener('click', () => {
    clearInterval(Interval);
});

buttonReset.addEventListener('click', () => {
    minutes = "00";
    seconds = "00";
    tens = "00";
    OutputMinutes.innerHTML = minutes;
    OutputSeconds.innerHTML = seconds;
    OutputTens.innerHTML = seconds;
});

function startTimer(){
    tens++;
    if(tens <= 9){
        OutputTens.innerHTML = "0" + tens;
    }

    if(tens > 9){
        OutputTens.innerHTML = tens;
    }

    if(tens > 99){
        seconds++;
        OutputSeconds.innerHTML = "0" + seconds;
        tens = 0;
        OutputTens.innerHTML = "0" + 0;
    }

    if(seconds > 9){
        OutputSeconds.innerHTML = seconds;
    }

    if(seconds > 59){
        minutes++;
        OutputMinutes.innerHTML = "0" + minutes;
        seconds = 0;
        OutputSeconds.innerHTML = "0" + 0;
    }
  }
}
