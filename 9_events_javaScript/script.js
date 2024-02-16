const demoEle = document.getElementById('demo');
const btnEle = document.getElementById('btn-start');
const btnStop = document.getElementById('btn-stop');



let intervalId;
let countStart = 0;

btnEle.addEventListener('click', function () {
    countStart++;

    clearInterval(intervalId);

    if (countStart === 6) {
        StopClock();
        countStart = 0;
        return;
    } else {
        intervalId = setInterval(function () {
            demoEle.innerHTML = Date();
            demoEle.style.cssText = "color: red; font-size: 48px; transition: all 2s ease-in-out; transform:rotate(360deg);";
        }, 1000);
    }
});

btnStop.addEventListener('click', function () {
    StopClock();
});

function StopClock() {
    clearInterval(intervalId);
    demoEle.innerHTML = 'Stop!';
    demoEle.style.cssText = "color: red; font-size: 48px;";
}


// 23 feb 2024 - CA01