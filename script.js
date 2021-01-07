
const daysId = document.getElementById('days');
const hoursId = document.getElementById('hours');
const minutesId = document.getElementById('minutes');
const secondsId = document.getElementById('seconds');


let newYear = "Jan 1 2022";

function countdown(){
    const newYearDate = new Date(newYear);
    const currentDate = new Date();
    const totalSeconds = (newYearDate - currentDate)/1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);


    daysId.innerHTML = formatTime(days);
    hoursId.innerHTML = formatTime(hours);
    minutesId.innerHTML = formatTime(minutes);
    secondsId.innerHTML = formatTime(seconds);

}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}

function start(time){
    countdown();
    setInterval(countdown, 1000);
}

//initial call
start();


