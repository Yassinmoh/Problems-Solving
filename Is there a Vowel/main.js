const IsVowel=(a)=>{
    let newArr=a.map((ele)=>{
        if(ele===101 || ele===97 ||ele=== 105 ||ele=== 111 ||ele=== 117){
            return String.fromCharCode(ele)
        }
        return ele;
    })
    return newArr
}
console.log(IsVowel([101,121,110,113,103,107])); //['e', 121, 110, 113, 103, 107]