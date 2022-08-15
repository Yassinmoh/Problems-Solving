//First Solution:
const differenceInAge2 = (ages) => {
    let min = Math.min(...ages)
    let max = Math.max(...ages)
    let average = max - min;
    return [max, min, average];
}
console.log(differenceInAge2([50, 100, 10, 70])); //[100, 10, 90];

//Second Solution:
const differenceInAge = (ages) => {
    let arrAges = [...ages];
    let smallestAge = 0;
    let largestAge = 0
    let average = 0;

    largestAge = arrAges.sort((a, b) => {
        return a - b;
    })[arrAges.length - 1];

    smallestAge = arrAges.sort((a, b) => {
        return a - b;
    })[0];

    average = largestAge - smallestAge
    return [largestAge, smallestAge, average];
}
console.log(differenceInAge([50, 100, 10, 70])); //[100, 10, 90];



