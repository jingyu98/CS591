//  A function that prints the cube value of its input (ie f(x)=x^3)
//  call the function on each value of the array [1,2,3,4,5,6,7]

const cube = input => {
    for(const x of input){
        console.log(x**3);
    }
}
const array = [1,2,3,4,5,6,7];
cube(array);