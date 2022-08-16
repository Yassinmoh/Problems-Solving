const changeCharToForword = (str) => {
    str.split('').map(ele =>String.fromCharCode(ele.charCodeAt(0) + 1))
}

console.log(changeCharToForword('a')); //b
console.log(changeCharToForword('b')); //c
console.log(changeCharToForword('c')); //d