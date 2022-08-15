const addCommaAndUnderscore = (num) => {
    let result = num.toLocaleString();
    result = result.split('')
    result[result.length - 4] = '_'
    result = result.join('')
    return result
}
console.log(addCommaAndUnderscore(123)); //123
console.log(addCommaAndUnderscore(1234)); //1_234
console.log(addCommaAndUnderscore(123456)); //123_456
console.log(addCommaAndUnderscore(123456564564)); //123,456,564_564
