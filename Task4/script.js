const button1=document.querySelector('.button1');
const button2=document.querySelector('.button2');
const button3=document.querySelector('.button3');
const button4=document.querySelector('.button4');
const button5=document.querySelector('.button5');

button1.addEventListener('click', functionRemovesBy3);
button2.addEventListener('click', functionAddNumbers);
button3.addEventListener('click', functionAdd3);
button4.addEventListener('click', functionSlice);
button5.addEventListener('click', functionShuffleSort);

function createNumbersArray() {
    let array = [];
    for (let i = 0; i <= 100; i++) {
        array.push(i);
    }
    return array;
}

function functionRemovesBy3() {
const numbers=[];
for (let i = 0; i <= 100; i++) {
numbers.push(i);
}
const results=[];
for (let i = 0; i < numbers.length; i++) {
if (numbers[i] % 3 !== 0) {
        results.push(numbers[i]);
    }
}
    console.log(results);
}

function functionAddNumbers() {
    const numbers=[];
for (let i = 0; i <= 100; i++) {
    numbers.push(i);
}
for (let i = 101; i <=150; i++) {
    numbers.push(i);
}
console.log(numbers);
}

function functionAdd3() {
    const numbers=[];
    for(let i = 0; i <= 100; i++) {
        numbers.push(i);
    }
        const result=[];
        for(let j = 0; j < numbers.length; j++) {
            result.push(numbers[j] + 3);
        }
        console.log(result);
    }   

    function functionSlice() {
        const numbers=[];
        for(let i = 0; i <= 100; i++) {
            numbers.push(i);
        }
        const result=[];
        for(let k=20; k <= 40; k++) {
            result.push(numbers[k]);
        }
        console.log(result);
    }

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
function compareDescending(a, b) {
    return b - a;
}

    function functionShuffleSort() {
        const numbers=[];
        for(let i = 0; i <= 100; i++) {
            numbers.push(i);
        }
        shuffleArray(numbers);
        console.log(numbers);
        numbers.sort(compareDescending);
        console.log(numbers);
    }