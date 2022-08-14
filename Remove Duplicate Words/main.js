//First Solution:
const removeDuplicateWords = (sentence) => {
    let result = sentence.toString().split(' ');
    let WordsList = [];
    for (let i = 0; i < result.length; i++) {
        if (WordsList.indexOf(result[i]) === -1) {
            WordsList.push(result[i]);
        }
    }
    return WordsList.join(" ")
}
console.log(removeDuplicateWords("Hello yassin yassin i'm from from Egypt Egypt Egypt"));


//Second Solution:
const removeDuplicateWords2 = (sentence) => {
    let result = sentence.toString().split(' ').filter(function (item, pos, self) {
        return self.indexOf(item) == pos;
    }).join(" ");
    return result
}
console.log(removeDuplicateWords2("Hello yassin yassin i'm from from Egypt Egypt Egypt"));


//Third Solution:
const removeDuplicateWords3 = (sentence) => {
    let result = sentence.toString().split(' ');
    let wordInSet = new Set(result);
    let setToArray = [...wordInSet]
    return setToArray.join(" ")
    //short way:
    // return [...new Set(sentence.split(' '))].join(" ")
}
console.log(removeDuplicateWords3("Hello yassin yassin i'm from from Egypt Egypt Egypt"));