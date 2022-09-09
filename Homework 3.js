// 1. For a given number calculate the sum of its digits.

let number1 = +prompt(" Write number! ");
let sumDigit = 0;

while (number1) {
    sumDigit = sumDigit + (number1 % 10)
    number1 = (number1 - number1 % 10) / 10
    if (number1 === 0) {
        break
    }
}
alert(sumDigit);

// 2. Given three sides of a triangle. Check whether the triangle is valid or not. Print “yes” if it is valid
// and no-quot otherwise. (Triangle is valid if the sum of its two sides are greater than the third side).

let side1 = 2;
let side2 = 3;
let side3 = 5;

if (side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2) {
    console.log("Yes")
} else {
    console.log("No")
}

// 3. Given a number print its digits count.

let number2 = 94956;
let count1 = 0;

while (number2) {
    number2 = (number2 - number2 % 10) / 10
    count1++
    if (number2 === 0) {
        break
    }
}
console.log(count1);

// 4. Count numbers of digit 9 in a number.

let number3 = 9465979;
let count = 0;

while (number3) {
    if (number3 % 10 === 9) {
        count++
    }
    number3 = (number3 - number3 % 10) / 10;

    if (number3 === 0) {
        break
    }
}
console.log(count);

// 5 Given a positive number. Print it in reverse order.

let number = 111222;
let reverse = 0;

while (number) {
    reverse = (reverse + number % 10) * 10;
    number = (number - number % 10) / 10;
    if (number === 0) {
        reverse = reverse / 10
        break
    }
}
console.log(reverse);
