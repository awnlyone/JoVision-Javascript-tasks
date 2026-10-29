const button = document.querySelector(".button");

button.addEventListener("click", handleClick);

function createNumbersArray() {
    let arr = [];
    for (let i = 0; i <= 100; i++) {
        arr.push(i);
    }
    return arr;
}

function isEvenNumber(num) {
    return num % 2 === 0;
}

function calculateSumOfEvenNumbers(numbers) {
    let sum = 0;
    for (const num of numbers) {
        if (isEvenNumber(num)) {
            sum += num;
        }
    }
    return sum;

}
function handleClick() {
    const numbersArray = createNumbersArray();
    const sumOfEvenNumbers = calculateSumOfEvenNumbers(numbersArray);
   console.log("Sum of even numbers from 0 to 100:", sumOfEvenNumbers);
}