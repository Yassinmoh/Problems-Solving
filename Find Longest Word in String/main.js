//First Solution:
const longestWordIn = (sentence) => {
    let arrSent = sentence.split(" ");
    let result = arrSent.reduce((acc, ele) => {
        return acc.length > ele.length ? acc : ele;
    });
    return result;
};
console.log(longestWordIn("The following statements are true about sentences in English")); //statements

//Second Solution:
const longestWordIn2 = (sentence) => {
    let arrSent2 = sentence.split(" ");
    let largestLength = 0;
    let largestWord = "";

    for (let i = 0; i < arrSent2.length; i++) {
        if (arrSent2[i].length > largestLength) {
            largestLength = arrSent2[i].length;
            largestWord = arrSent2[i];
        }
    }
    return largestWord;
};
console.log(longestWordIn2("The following statements are true about sentences in English")); //statements
