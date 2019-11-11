function TimeConvert(num) {

    // code goes here
    let h = num % 60;
    let h2 = Math.floor(num / 60);
    return `${h2}:${h}`

}

// keep this function call here
console.log(TimeConvert(126));