const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const ampmElement = document.getElementById("ampm");

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if(hour > 12) {
        h = h - 12;
        ampm = "PM";
    }

    hoursElement.innerText = h;
    minutesElement.innerText = m;
    secondsElement.innerText = s;
    ampmElement.innerText = ampm;

    setTimeout(() => {
        updateClock();
    }, 1000);
}

updateClock();

console.log(hoursElement);
