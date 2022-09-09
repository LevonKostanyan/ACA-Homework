// 1. Given three numbers a, b (a ≤ b) and step. Create an array of evenly spaced elements
// starting from a to b spaced by step.

function numbers(a, b, c) {
    let arr = [];
    for (let i = a; i <= b; i += c) {
        arr.push(i)
    }
    return arr
}

console.log(numbers(1, 5, 0.5))

// 2. Given a string and a symbol. Find the number of occurrences of the symbol in the string.

function countSymbol(string, symbol) {
    let count = 0;
    for (let i = 0; i <= string.length; i++) {
        if (string[i] === symbol) {
            count += 1
        }
    }
    return count
}

console.log(countSymbol("Some text here", ""))
console.log(countSymbol("another string", "t"))

// 3. Given a string. Check whether the string is palindrome or not.

function checkPalindrome(string) {
    let length = string.length
    for (let i = 0; i < length / 2; i++) {
        if (string[i] !== string[length - 1 - i])
            return "No"
    }
    return "Yes"
}

console.log(checkPalindrome(""))

// 4. Given an array of numbers. Find the maximum element in array.

function numbersArr(arr) {

// arr = arr.sort((a,b) => a - b)
// return arr[arr.length - 1]

// or

    let maxValue = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i]
        }
    }
    return maxValue
}

console.log(numbersArr([1, 5, 8, 12, 45, 2, -99, 564, 6546, 6313, -56151, -5615]))

// 5. Given an array. Create the array which elements are products between two neighbours.

function prodBetTwoNeigh(arr) {
    let result = []
    for (let i = 0; i < arr.length - 1; i++) {
        result.push(arr[i] * arr[i + 1])
    }
    return result
}

console.log(prodBetTwoNeigh([3, 7, 12, 5, 20, 0]))

// 6. Given a string and symbols. Change first symbol by the second one in the string.

function foo(str, a, b) {
    console.log(str.split(a).join(b))
}

foo("does the following code", "o", "0")

// 7. Print the following number pattern:

function strNum(n) {
    let str = ""
    for (let i = 1; i <= n; i++) {
        str += i
        console.log(str)
    }
    for (let i = n - 1; i >= 1; i--) {
        str = str.slice(0, i)
        console.log(str)
    }
}

strNum(5)
