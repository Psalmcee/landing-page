const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const focus = document.getElementById('focus');
const focusAnswer = document.getElementById('focus-answer'); 
let displayTime;

function showTime() {
    let today = new Date()
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

    //convert 24 hours into 12 hours
    let amPm = hour % 12 || 12

    //add zeros in front of single integer
    amPm = (amPm < 10 ? '0' + amPm : amPm )
    min = (min < 10 ? '0' + min : min)
    sec = (sec < 10 ? '0' + sec : sec)
    
    time.innerHTML = `${amPm}:${min}:${sec} `
    time.innerHTML += (hour >= 12 ? 'PM' : 'AM')
    
    setTimeout(showTime, 1000)
}
showTime()

//adding AM or PM

