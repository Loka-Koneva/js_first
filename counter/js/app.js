// список элементов h4
const items = document.querySelectorAll('.countdown-item > h4');
// контейнер, который оборачивает элементы h4
const countdownElement = document.querySelector('.countdown');


const oneSec = 1000
const oneMin = 60 * 1000;
const oneHour = 60 * 60 * 1000;
const oneDay = 24 * 60 * 60 * 1000;
// конечная дата 
let countdownDate = new Date(2026, 10, 19, 0,0).getTime();

function getcountTime() {
    const now = new Date().getTime();
    const delta = countdownDate - now;
    let days = Math.floor(delta / oneDay);
    let hours  = Math.floor((delta % oneDay) / oneHour);
    let minutes = Math.floor((delta % oneHour) / oneMin);
    let seconds = Math.floor((delta % oneMin) / oneSec);
    const values = [days, hours, minutes, seconds];
    console.log(days, hours, minutes, seconds);
    items.forEach(function (item, index) {
        item.textContent = values[index];
    })
    if (delta < 0) {
        clearInterval(countdown)
        countdownElement.innerHTML = "<h2 class='expired'>Tour started!</h2>"
    }
}

// обновление счетчика каждую секунду
let countdown = setInterval(getcountTime, 1000);

// первичная инициализация
getcountTime()