// 1.Declare 2 variables a and b,
// such that a > b,
// and define values for them. Output their

let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// 2.Print your name and age in the following format:
// “My name is ____, I am ____ .”

let name = prompt("My name is ");
let age = prompt(" I am ");
alert("My name is " + name + "," + " I am " + age);

// 3.Declare a variable with defined value.
// Print the last digit of the number.

let number1 = prompt("Number");
let lastDigit = number1 % 10;
alert("The last digit of " + number1 + " is " + lastDigit);

// 4.Check whether a given number is negative.
// Print “yes”, if it is negative, print “no”
// otherwise.

let number = prompt("Number")
if (number < 0) {
    alert("yes")
} else {
    alert("no")
}

// 5.Given two numbers print 1 if one of them is divisible
// by the other one, otherwise print 0.

let num1 = prompt("Write number 1");
let num2 = prompt("Write number 2");
if (num1 % num2 === 0 || num2 % num1 === 0) {
    alert("1")
} else {
    alert("0")
}

// 6.Given any number between 1 and 12.
// Print the name of the respective month.

let MonthsNumber = prompt("Write month number");
switch (MonthsNumber) {
    case "1":
        alert("January");
        break;
    case "2":
        alert("February");
        break;
    case "3":
        alert("March");
        break;
    case "4":
        alert("April");
        break;
    case "5":
        alert("May");
        break;
    case "6":
        alert("June");
        break;
    case "7":
        alert("July");
        break;
    case "8":
        alert("August");
        break;
    case "9":
        alert("September");
        break;
    case "10":
        alert("October");
        break;
    case "11":
        alert("November");
        break;
    case "12":
        alert("December");
        break;
}

// 7.Given three numbers. Find the maximum one.

let num3 = prompt("Write number 1");
let num4 = prompt("Write number 2");
let num5 = prompt("Write number 3");

if (num3 > num4 && num3 > num5) {
    alert(num3)
} else if (num4 > num3 && num4 > num5) {
    alert(num4)
} else if (num5 > num3 && num5 > num4) {
    alert(num5)
} else {
    alert("equal")
}