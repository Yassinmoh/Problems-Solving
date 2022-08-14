const removeCharacterFrom = (word, char) => {
    let result = word.split('').filter((ele) => {
        return ele !== char;
    })
    return result.join('');
}
console.log(removeCharacterFrom('yassin@ m@oham@ed y@@assin', '@')); // yassin mohamed yassin
console.log(removeCharacterFrom('Ix Lxove JxavaSxcriptx', 'x')); // I Love JavaScript








