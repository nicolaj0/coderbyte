function LetterChanges(str) {

    // code goes here
    let strings = "abcdefghijklmnopqrstuvwxyz".split("");
    let vowels = "aeiou".split("");
    const dict = strings
        .map((v, i, a) => i === a.length - 1 ? a[0] : a[i + 1]);
    const result = new Map(dict.map((v,i) => [strings[i], v]));
    let strings1 = str.split("").map((s, i) => result.get(s) ? result.get(s) : s);

    let res = strings1.map((v)=> vowels.includes(v) ? v.toUpperCase() : v);

    return  res.join("");


}

// keep this function call here
console.log(LetterChanges("hello world"));