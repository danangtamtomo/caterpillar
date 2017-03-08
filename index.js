var lib = require('./lib/lib')

console.log(lib.isEmpty([]))

console.log(lib.count(['Danang', 'Aji', 'Tamtomo']))

console.log(lib.head([1, 2, 3]))
console.log(lib.head([4, 5, 6]))

console.log(lib.tail([1, 2, 3]))
console.log(lib.tail([2, 3]))

console.log(lib.flatten([1, [2, 3], 4, [5, [6, 7]]]))
