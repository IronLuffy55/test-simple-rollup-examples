'use strict';

function add(a,b){
return a +b;
}

var bundle = add;

function multiply(a,b){
  return a * b;

}

var bundle$1 = multiply;

console.log('1+1', bundle(1, 1));
console.log('3*3', bundle$1(3, 3));
