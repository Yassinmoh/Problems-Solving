//First Solution:
const sumPositiveNumbers = (arr) => {
    let sum = 0;
    if (arr == '') {
        return sum;
    } else {
        let myArr = [...arr];
        sum = myArr.filter(ele => ele > 0)
            .reduce((acc, current) => acc + current)
    }
    return sum
}

console.log(sumPositiveNumbers([1, 2, 3, 4, 5])); //15
console.log(sumPositiveNumbers([-8, 2, -3, 7, 5, -12, 32])); //46
console.log(sumPositiveNumbers([])); //0


//Second Solution:
const sumPositiveNumbers2 = (arr) => {
    let sum =0;
    for(let i=0 ; i < arr.length ; i++){
        if(arr[i] > 0){
            sum+=arr[i];
        }
    }
    return sum;
}

console.log(sumPositiveNumbers2([1, 2, 3, 4, 5])); //15
console.log(sumPositiveNumbers2([-8, 2, -3, 7, 5, -12, 32])); //46
console.log(sumPositiveNumbers2([])); //0