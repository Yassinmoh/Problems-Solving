//First Solution:

const convert = (num) => {
    return num.toString().split("").map(ele => Number(ele)).reverse();
}

console.log(convert(123456789)); //[9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(convert(56789));// [9, 8, 7, 6, 5]


//Second Solution:

const convertToArray = (num) => {
    let array = [];
    let myStr = num.toString();
    for (let i = 0; i < myStr.length; i++) {
        array.unshift(+myStr[i])
    }
    return array;
}

console.log(convertToArray(123456789)); //[9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(convertToArray(56789));// [9, 8, 7, 6, 5]