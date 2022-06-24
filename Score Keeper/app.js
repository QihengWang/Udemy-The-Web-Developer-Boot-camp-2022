const selectBox = document.querySelector('select');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const span1 = document.querySelector('#span1');
const span2 = document.querySelector('#span2');
let isGameOver = false;
let winningScore = selectBox.value;

function reset() {
    span1.innerText = 0;
    span2.innerText = 0;
    span1.classList.remove('win', 'lose');
    span2.classList.remove('win', 'lose');
    isGameOver = false;
}

selectBox.addEventListener('change', function() {
    winningScore = this.value;
    reset();
})

btn1.addEventListener('click', function() {
    if (!isGameOver) {
        span1.innerText = parseInt(span1.innerText) + 1;
        if (span1.innerText === winningScore) {
            span1.classList.add('win');
            span2.classList.add('lose');
            isGameOver = true;
        }
    }
})

btn2.addEventListener('click', function() {
    if (!isGameOver) {
        span2.innerText = parseInt(span2.innerText) + 1;
        if (span2.innerText === winningScore) {
            span2.classList.add('win');
            span1.classList.add('lose');
            isGameOver = true;
        }
    }
})

btn3.addEventListener('click', function() {
    reset();
})




