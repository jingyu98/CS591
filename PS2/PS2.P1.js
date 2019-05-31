//The first generator should return the series of fibonacci numbers starting from 0.

function* fibs () {
    let [val1, val2, result] = [0, 1, 0];
    while (true) {
        result = val1+val2;
        val1 = val2;
        val2 = result;
        yield result;
    }
}

//The second generator should use the first to obtain the next number in the sequence, rejecting it if it is odd
// and asking for the next.

function* evenFibs() {
    const myFib = fibs();
    while (true) {
       let result = myFib.next().value;
       if (result % 2 === 0) {
           yield result;
       }
    }
}

// print out the first 5 even Fibonacci numbers.

myFibeven = evenFibs();
let count = 5;
while (count --> 0) {
    console.log(myFibeven.next().value);
}

// 2
// 8
// 34
// 144
// 610