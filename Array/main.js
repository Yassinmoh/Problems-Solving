/**
 * Let us create a function that receives a string "abcbdbd",
 * and returns an array like:
["a", "a.b", "a.b.c", "a.b.c.b", "a.b.c.b.d", "a.b.c.b.d.b", ...]
 */

function splitString(str) {

    let arrayOfString = Array.from(str);
    const output = arrayOfString.map((ele, idx, arr) => arr.slice(0, idx + 1).join("."));
    return output
}

console.log(splitString("abcdebfkj")); //['a', 'a.b', 'a.b.c', 'a.b.c.d', 'a.b.c.d.e', 'a.b.c.d.e.b', 'a.b.c.d.e.b.f', 'a.b.c.d.e.b.f.k', 'a.b.c.d.e.b.f.k.j']