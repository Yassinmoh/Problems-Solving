const points = (games) => {
    let resultArr = [...games]
    let point = 0;

    for (let i = 0; i < resultArr.length; i++) {
        let x = resultArr[i][0]
        let y = resultArr[i][2]
        if (x > y) {
            point += 3;
        } else if (x < y) {
            point += 0;
        }
        else if (x == y) {
            point += 1;
        } else {
            return 'unKnown result'
        }
    }
    return point
}
console.log(points(['2:3', '6:1', '8:2', '1:1', '0:3', '4:3'])); //10