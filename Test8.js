function AlphabetSoup(str) {

    // code goes here
    var lettes = str.split("").sort();

    return lettes.join("");
}

// keep this function call here
console.log(AlphabetSoup("coderbyte"));