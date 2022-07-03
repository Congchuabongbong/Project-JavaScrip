const daysEl = document.querySelector('#days');
const hoursEl = document.querySelector('#hours');
const minsEl = document.querySelector('#mins');
const secondsEl = document.querySelector('#seconds');
const newYear = '01/31/2023';

const countdown = () => {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();
    const totalSeconds = (newYearDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);
    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
        alert('Happy birthday to me!!');
    }
};
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
countdown();
setInterval(() => {
    countdown();
}, 1000);
