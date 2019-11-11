function SimpleSymbols(str) {
    var re = /\+[a-zA-Z]\+/g;
    var letters = /[a-zA-Z]/g;

    for (let i = 0; i < str.length; i++) {
        if (str[i].match(letters)) {
            let surrounding = `${i > 0 ? str[i - 1] : ''}${str[i]}${i < str.length - 1 ? str[i + 1] : ''}`;
            if (!surrounding.match(re)){
                return false;
            }

        }
    }

    return true;

}

// keep this function call here
console.log(SimpleSymbols("+d+=3=+s+"));
console.log(SimpleSymbols("f++d+"));
console.log(SimpleSymbols("+z+z+z+"));