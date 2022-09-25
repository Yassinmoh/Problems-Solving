let reverseString = (string) => {
    let reverseString = string.split("").reverse().join("").split(" ").reverse().join(" ")
    return reverseString
}
console.log(reverseString("Welcome to this Javascript Guide!"));