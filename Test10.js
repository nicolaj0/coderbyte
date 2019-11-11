function CorrectPath(str) {
    //create an array to hold the positions of the question marks
    let blankArray = [];
    //put the position of the question marks into the array
    str.split('').forEach((val, ind) => {
        if (val === '?') {
            blankArray.push(ind);
        }
    });

    let num = blankArray.length;

    //we are going to try each possibility until we find one that works,  This will be 4^num permutations
    let total = Math.pow(4, num);

    for (let i = 0; i < total; i++) {
        //go through each permutation, first creating a representative number, then making the path, then testing it
        let numString = (i + total).toString(4).slice(1);
        let currentPath = createPath(str, blankArray, numString);
        if (isPathGood(currentPath)) {
            return currentPath;
        }
    }
}


isPathGood = (str) => {
    //create our empty array
    let testArray = []
    for (let i = 0; i < 5; i++) {
        testArray.push([0, 0, 0, 0, 0])
    }

    let len = str.length;
    let currentLoc = [0, 0];

    for (let i = 0; i < len; i++) {
        //mark our current square as visited
        testArray[currentLoc[0]][currentLoc[1]] = 1;
        //alter the position based on the next letter
        let newLoc = currentLoc.slice(0);
        switch (str[i]) {
            case 'u':
                newLoc[0]--;
                break;
            case 'd':
                newLoc[0]++;
                break;
            case 'r':
                newLoc[1]++;
                break;
            case 'l':
                newLoc[1]--;
                break;
        }
        //quit if we have gone off the board
        if (newLoc.includes (-1) || newLoc.includes (5)) {
            return false;
        }
        //quit if we are on a previously visited space
        if (testArray[newLoc[0]][newLoc[1]] === 1) {
            return false;
        }
        //return true if we are at the target square on our last go
        if (newLoc[0] === 4 && newLoc[1] === 4 && i === len - 1) {
            return true;
        }
        //update our location for the next loop;
        currentLoc = newLoc;
    }
    return false;
};

createPath = (str, blanks, num) => {
    let moveArray = ['r', 'l', 'u', 'd'];
    strArr = str.split('');
    blanks.forEach((val, ind) => {
        strArr.splice(val, 1, moveArray[num[ind]]);
    });
    return strArr.join('');
};

// keep this function call here
let res = CorrectPath("???rrurdr?");
console.log(res)