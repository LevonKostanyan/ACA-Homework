// 1. Given an array․ Compute the length of the array. (without using .length)

let arrayLength = [1, 2, 3];
let newArrayLength = 0;
for (let i = 0; i <= arrayLength.length; i++) {
    newArrayLength = i
}
console.log(newArrayLength);

// 2. Given an array of numbers. Print the sum of the elements in array.

let numbersArray = [5, 2, 8];
let sumElements = 0;

for (let i = 0; i < numbersArray.length; i++) {
    sumElements += numbersArray[i]
}
console.log(sumElements);

// 3. Given two numbers. Print powers of 2 between that numbers. (without using
// Math.pow)

let num1 = 7;
let num2 = 45;
let powersOf2 = [];
let power2 = [];

function customPow(number, pow) {
    if (pow <= 0) {
        return number
    }

    let numberPow = 1;

    for (let i = 0; i < pow; i++) {
        numberPow *= number
    }

    return numberPow;
}

for (let i = 0; i < 10; i++) {
    power2.push(customPow(2, i))
}

for (let i = num1; i < num2; i++) {
    const isValidNumber = power2.find((power2Number) => power2Number === i);

    if (isValidNumber) {
        powersOf2.push(i)
    }
}

console.log(powersOf2)

// 4.Given a number as input, insert dashes (-) between each two even numbers.

let number = [1, 1, 2, 2, 1, 1]

function dashesEven(arr) {
    let newArr = []
    for (let i = 0; i < number.length; i++) {
        if (number[i] % 2 === 0 && number[i + 1] % 2 === 0) {
            newArr.push(number['-'])
        } else {
            newArr.push(number[i])

        }
    }
    console.log(newArr)
}

dashesEven(number);

// 5.Insert a n positive number. Print the n-st prime number.
