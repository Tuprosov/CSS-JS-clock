const secondsHand = document.querySelector('.seconds-hand');
const minsHand = document.querySelector('.minutes-hand');
const hourHand = document.querySelector('.hour-hand');

const currentTime  = new Date();

const seconds = currentTime.getSeconds();
let secondsDegrees = ((seconds / 60) * 360) + 90
secondsHand.style.transform = `rotate(${secondsDegrees}deg)`

const minutes = currentTime.getMinutes();
let minutesDegrees = ((minutes / 60) * 360) + 90
minsHand.style.transform = `rotate(${minutesDegrees}deg)`

const hour = currentTime.getHours();
let hourDegrees = ((hour / 12) * 360) + 90
hourHand.style.transform = `rotate(${hourDegrees}deg)`

function setDate() {
   secondsDegrees += 6
   secondsHand.style.transform = `rotate(${secondsDegrees}deg)`

   minutesDegrees += 0.1
   minsHand.style.transform = `rotate(${minutesDegrees}deg)`

   hourDegrees += 0.01833333
   hourHand.style.transform = `rotate(${hourDegrees}deg)`
};

setInterval(setDate, 1000);
