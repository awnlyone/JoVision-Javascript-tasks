const button = document.querySelector('.button');
button.addEventListener('click',handleClick);

function createNumbersArray() {
    let numbers = [];
    for (let i = 0; i <= 100; i++) {numbers.push(i);}
    return numbers;
}

function calculateSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

function handleClick() {
    const numbersArray = createNumbersArray();
    const sum = calculateSum(numbersArray);
    console.log(sum);
}