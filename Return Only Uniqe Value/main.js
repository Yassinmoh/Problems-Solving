let findUnqId = (array) => {
    let result = array.reduce((acc, curr) => {
        return acc == curr ? acc : curr
    })
    return result
}

console.log(findUnqId([1, 2, 3, 1, 2, 3, 8, 8, 10])); //10