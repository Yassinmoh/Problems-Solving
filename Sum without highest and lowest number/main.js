function sumArray(array) {
    if (array == null) {
        return 0
    }
    return array
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((acc, current) => acc + current, 0)
}

console.log(sumArray([0, 1, 6, 10, 10])); //17