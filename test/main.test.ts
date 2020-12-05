import * as array from '../array';

const map = array.map();
const reduce = array.reduce();

console.log(map([1, 2, 3], e => e + 2));
console.log(reduce([1, 2, 3], (a, b) => a + b));
console.log(reduce([1, 2, 3], (a, b) => a - b, 0));