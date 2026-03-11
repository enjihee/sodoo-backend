//  Function declaration
function test(a ,b) {
    return a * b;
}
console.log(test(4,8));
//  Function expression
const add = function (a ,b ) {
    return a + b
}
console.log(add(3,5));
// Arrow function
// const square = (n) => {
//     return n * n;
// }
const square = n => n * n;
console.log(square(4));