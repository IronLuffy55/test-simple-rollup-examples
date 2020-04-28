'use strict';

var foo = 'hello world!';

function add(a, b) {
  return a + b
}

function multiply(a,b){
  return a * b;

}

console.log(foo);
console.log('1+1', add(1, 1));
console.log('3*3', multiply(3, 3));
function index () {
  console.log(foo);
}

module.exports = index;
