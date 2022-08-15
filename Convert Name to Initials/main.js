const convertName = (string) => {
    let result = string.split(' ')
    return (`${result[0][0]}.${result[1][0]}`).toUpperCase()
}
console.log(convertName('yassin mohamed')); //Y.M
console.log(convertName('khaled hanafy')); //K.H