function CorrectPath(str) {

    const blankArray = []
    str.split('').forEach((val, ind) => {
        if (val === '?') {
            blankArray.push(ind);
        }
    });

    let num = blankArray.length;

    //we are going to try each possibility until we find one that works,  This will be 4^num permutations
    let total = Math.pow(4, num);
    const moveArray = ['r', 'l', 'u', 'd'];

    for (let i = 0; i < total; i++) {
        let numString = (i + total).toString(4).slice(1);

        let path = numString.split('').map((s) => moveArray[s])
        let strArr = str.split('')
        blankArray.forEach((val, ind) => {
            strArr.splice(val, 1, moveArray[num[ind]]);
            //let candidate = str.split('').splice(b, 1, path[ind]);
            console.log(strArr)
        })

    }


}


// keep this function call here
let res = CorrectPath("???rrurdr?");
//let res = CorrectPath("?uurrurdru");
console.log(res)