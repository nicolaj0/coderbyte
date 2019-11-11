/**
 * @return {string}
 */
function LetterCapitalize(str) {

    // code goes here
   /* const words = str.split(" ");

    const res = words.map((o, i, a) => {
        let letters = o.split("");
        letters[0] = letters[0].toUpperCase();
        return letters.join("");
    });

    return res.join(" ");*/

    let wordarr = str.split(" ");

    for (var i = 0, n = wordarr.length; i < n; i++) {
        wordarr[i] = wordarr[i][0].toUpperCase() + wordarr[i].slice(1);
    }
    str = wordarr.join(" ");

    return str

}

// keep this function call here
console.log(LetterCapitalize("hello world"));