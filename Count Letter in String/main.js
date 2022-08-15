const letterCount = (word, letter) => {
    let count = [];
    [...word].map((ele) => {
        if (ele === letter) {
            count.push(ele);
        }
    })
    return count.length
}

console.log(letterCount('yassin mohamed', 'a')); //2
console.log(letterCount('Hossam Hassan', 's')); //4
console.log(letterCount('', 'r')); //0