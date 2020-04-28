import foo from './foo.js'
import add from 'add'
import multiply from '@nested/multiply'
console.log(foo)
console.log('1+1', add(1, 1))
console.log('3*3', multiply(3, 3))
export default function () {
  console.log(foo)
}
