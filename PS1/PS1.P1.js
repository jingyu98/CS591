// Write a function that takes a string as its input and returns a new string that contains all of the
// letters in the original string, but in alphabetical order. Ignore punctuation and numbers. Test
// your function using the string ‘supercalifragilisticexpialidocious’.

const alphaOrder = str => [...str].sort().join('').replace(/\d+/g, "").replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
console.log(`Alphabetical order is: ${alphaOrder("supercalifragilisticexpialidocious")}`);
