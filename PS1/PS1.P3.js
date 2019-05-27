// A function that accepts two input parameters: a string, and a function. The function
// should execute the passed function with the passed string and return the result.
const passFunction = (str, fun) => {
    return fun(str);
}

console.log(passFunction('supercalifragilisticexpialidocious', str => str.split(/(?=c)/g)));

console.log(passFunction('supercalifragilisticexpialidocious', str => {
    var result = {
        originalString: str,
        modifiedString: str.replace(/a/g, 'A'),
        numberReplaced: (str.match(/a/g) || []).length,
        length: str.length
    };
    return result;
}));


