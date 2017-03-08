var isEmpty = function (arr) {
  return arr[0] === undefined
}

console.log(isEmpty([]))

var count = function (arr, currCount = 0) {
  return isEmpty(arr) ? currCount : count(arr.slice(1), currCount + 1)
}

console.log(count(['Danang', 'Aji', 'Tamtomo']))

var head = function (arr) {
  return arr[0]
}

console.log(head([1, 2, 3]))
console.log(head([4, 5, 6]))

var tail = function (arr) {
  return arr.slice(1)
}

console.log(tail([1, 2, 3]))
console.log(tail(2, 3))

var flatten = function (arr) {
  return arr.reduce(function (acc, val) {
    return acc.concat(Array.isArray(val) ? flatten(val) : val)
  }, [])
}

console.log(flatten([1, [2, 3], 4, [5, [6, 7]]]))
