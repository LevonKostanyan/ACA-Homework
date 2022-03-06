// 1. For a given number calculate the sum of its digits.

let number = +prompt(" Write number! ");
let sumDigit = 0;

while (number) {
    sumDigit = sumDigit + (number % 10)
    number = (number - number % 10) / 10
    if (number === 0) {
        break
    }
}
alert(sumDigit);

// 2. Given three sides of a triangle. Check whether the triangle is valid or not. Print “yes” if it is valid
// and “no&quot; otherwise. (Triangle is valid if the sum of its two sides are greater than the third side).

let side1 = 2;
let side2 = 3;
let side3 = 5;

if (side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2) {
    console.log("Yes")
} else {
    console.log("No")
}

// 3. Given a number print its digits count.

let number = 94956;
let count = 0;

while (number) {
    number = (number - number % 10) / 10
    count++
    if (number === 0){
        break
    }
}
console.log(count);

// 4. Count numbers of digit 9 in a number.

let number = 9465979;
let count = 0;

while (number) {
    if(number % 10 === 9){
        count++
    }
    number = (number - number % 10) / 10;

    if (number === 0){
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
    if (number === 0){
        reverse = reverse / 10
        break
    }
}
console.log(reverse);
