const time = document.getElementById('time');
const greet = document.getElementById('greet');
const focus = document.getElementById('focus');
const focusAnswer = document.getElementById('focus-answer'); 
const background = document.getElementById('bg')
let displayTime;
let greeting;

function showTime() {
    let today = new Date()
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

   
    //convert 24 hours to 12 hours
    let amPm = hour % 12 || 12;

    //add zeros in front of single integer
    amPm = (amPm < 10 ? '0' + amPm : amPm )
    min = (min < 10 ? '0' + min : min)
    sec = (sec < 10 ? '0' + sec : sec)
    
    time.innerHTML = `${amPm}:${min}:${sec} `
    time.innerHTML += (hour >= 12 ? 'PM' : 'AM')
    
    showGreeting()


    setTimeout(showTime, 1000)
}

showTime();

//greeting to display current time && change picture according to time of the day.
function showGreeting() {
    greeting  = ['Good morning User', 'Good afternoon User', 'Good evening User'];

    if (hour < 12) {
        greet.innerHTML = greeting[0]
        document.body.style.backgroundImage = "url('smileyrose.jpg)" 
    } else 
    if (hour >= 12 && hour < 18) {
        greet.innerHTML = greeting[1]
        document.body.style.backgroundImage = "url('flowers.jpg')"
    } else {
        greet.innerHTML = greeting[2]
        document.body.style.backgroundImage = "url('thankyou.jpg')"
    }
};
