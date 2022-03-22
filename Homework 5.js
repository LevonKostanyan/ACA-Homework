// 1. Given three numbers a, b (a ≤ b) and step. Create an array of evenly spaced elements
// starting from a to b spaced by step.

function numbers(a, b, c) {
    let arr = [];
    for (let i = a; i <= b; i += c) {
        arr.push(i)
    }
    return arr
}
console.log(numbers(1,5,0.5))

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

function checkPalindrome(string){
    let length = string.length
    for(let i = 0; i < length / 2;i++){
        if(string[i] !== string[length - 1 - i])
            return "No"
    }
    return "Yes"
}
console.log(checkPalindrome(""))

