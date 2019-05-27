// A function should
// Determine the operator (+, *, -, or /) embedded in the string
// Return a function to implement the input operator that returns the result

const evaluate = str => {
    var operator = str.charAt(1);
    switch (operator) {
        case '+':
            return plus;
            break;
    }
    switch (operator) {
        case '-':
            return minus;
            break;
    }
    switch (operator) {
        case '*':
            return mult;
            break;
    }
    switch (operator) {
        case '/':
            return div;
            break;
    }
    switch (operator) {
        case '%':
            return div2;
            break;
    }
}

const plus = expression => {
    let result = Number(expression.charAt(0)) + Number(expression.charAt(2));
    return result;
};
const minus = expression => {
    let result = expression.charAt(0) - expression.charAt(2);
    return result;
};
const mult = expression => {
    let result = expression.charAt(0) * expression.charAt(2);
    return result;
};
const div = expression => {
    let result = expression.charAt(0) / expression.charAt(2);
    return result;
};
const div2 = expression => {
    let result = expression.charAt(0) % expression.charAt(2);
    return result;
};

const expression = '8%3';
let operator = evaluate(expression);
console.log(`${expression} = ${operator(expression)}`);

const expression2 = '8*3';
let operator2 = evaluate(expression2);
console.log(`${expression2} = ${operator2(expression2)}`)
