// const inputEl = document.getElementById('year');
// const buttonEl = document.getElementById('btn-check');
// const paraEl = document.getElementById("result");

// buttonEl.addEventListener('click', function () {
//     const year = inputEl.value;
//     const result = isLeapYear(year);

//     if (result) {
//         alert(`${year} is a leap year`);
//         paraEl.textContent = `${year} is a leap year`;
//     } else {
//         alert(`${year} is not a leap year`);
//         paraEl.textContent = `${year} is not a leap year`;
//     }
// });

// function isLeapYear(year) {
//     if (year % 4 !== 0) {
//         return false;
//     } else if (year % 100 !== 0) {
//         return true;
//     } else if (year % 400 !== 0) {
//         return false;
//     } else {
//         return true;
//     }
// }


// const inputEl = document.getElementById('grade');
// const buttonEl = document.getElementById('btn-check');
// const paraEl = document.getElementById("result");

// buttonEl.addEventListener('click', function (event) {
//     event.preventDefault(); // Prevent form submission
//     const marks = inputEl.value;
//     let result = getGrade(marks);

//     paraEl.textContent = `Your grade is ${result}`;
// });

// function getGrade(marks) {
//     if (marks >= 90) {
//         return 'A';
//     } else if (marks >= 80) {
//         return 'B';
//     } else if (marks >= 70) {
//         return 'C';
//     } else if (marks >= 60) {
//         return 'D';
//     } else {
//         return 'F';
//     }
// }


// const num1El = document.getElementById('num1');
// const num2El = document.getElementById('num2');
// const buttonEl = document.getElementById('btn-check');
// const paraEl = document.getElementById("result");

// buttonEl.addEventListener('click', function (event) {
//     event.preventDefault();
//     const num1 = num1El.value;
//     const num2 = num2El.value;
//     let result = checkGreater(num1, num2);

//     paraEl.textContent = `Largest number is ${result}`;
// });

// function checkGreater(num1, num2) {
//     if (num1 > num2) {
//         return num1;
//     } else {
//         return num2;
//     }
// }


// const num1El = document.getElementById('num1');
// const num2El = document.getElementById('num2');
// const num3El = document.getElementById('num3');
// const buttonEl = document.getElementById('btn-check');
// const paraEl = document.getElementById("result");

// buttonEl.addEventListener('click', function (event) {
//     event.preventDefault();
//     const num1 = num1El.value;
//     const num2 = num2El.value;
//     const num3 = num3El.value;
//     let result = signIs(num1, num2, num3);

//     paraEl.textContent = `Sign is ${result}`;
// });

// function signIs(num1, num2, num3) {
//     let product = num1 * num2 * num3;

//     if (product > 0) {
//         return 'Positive';
//     } else if (product < 0) {
//         return 'Negative';
//     } else {
//         return 'Zero';
//     }
// }



const numEl = document.getElementById('num');
const buttonEl = document.getElementById('btn-check');
const paraEl = document.getElementById("result");

buttonEl.addEventListener('click', function (event) {
    event.preventDefault();
    const num = numEl.value;

    for (let i = 1; i <= num ; i++) {

        if (i == 5 || i == 8) {
            continue;
        }

        let result = printFactorialRange(i);
        paraEl.innerHTML += `Factorial of ${i}: ${result}<br>`;
    }
});

function printFactorialRange(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}