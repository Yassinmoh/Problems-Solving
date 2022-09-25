const names = ['yassin', 'yassin', 'omar', 'ahmed', 'yousef', 'yousef', 'yousef', 'ahmed']

const dublicateCounts = names.reduce((acc, ele) => {
    if (acc[ele] == undefined) {
        acc[ele] = 1
        return acc
    } else {
        acc[ele]++;
        return acc
    }
}, {})

console.log(dublicateCounts);