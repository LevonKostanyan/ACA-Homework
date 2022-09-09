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

function getPowerResult(a, b) {
    let newArray = [];
    for (let i = a; i <= b; i++) {
        if ((2 ** i) >= a && (2 ** i) <= b) {
            newArray.push(2 ** i);
        }
    }
    return newArray;
}

getPowerResult(0, 150);

// 4.Given a number than input, insert dashes (-) between each two even numbers.

function numberDashes(num) {
    let numArr = String(num).split('')
    let newNumber = "";
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] % 2 === 0 && numArr[i + 1] % 2 === 0) {
            newNumber += numArr[i] + "-";
        } else {
            newNumber += numArr[i];
        }
    }
    return (newNumber)
}

console.log(numberDashes(122100))

// 5.Insert an n positive number. Print the n-st prime number.

function primeElementOfArr(positiveNumber, lastElementOfArr) {
    let arr = [];
    for (let i = 0; i <= lastElementOfArr; i++) {
        arr.push(i)
    }

    function isPrime(num) {
        for (let j = 2; j < num; j++) {
            if (num % j === 0) {
                return false
            }
        }
        return num > 1
    }

    let primeNumbersArr = arr.filter(isPrime)

    let primeArrChange = primeNumbersArr.splice(positiveNumber - 1)
    return primeArrChange[0];
}

console.log(primeElementOfArr(14, 100))
