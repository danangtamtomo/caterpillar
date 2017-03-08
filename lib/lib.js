const lib = {}

lib.isEmpty = function (arr) {return arr[0] === undefined}
lib.count = function (arr, currCount = 0) { return this.isEmpty(arr) ? currCount : this.count(arr.slice(1), currCount + 1) }
lib.head = function (arr) { return arr[0]}
lib.tail = function (arr) {return arr.slice(1)}
lib.flatten = function (arr) {
  return arr.reduce(function (acc, val) {
    return acc.concat(Array.isArray(val) ? lib.flatten(val) : val)
  }, [])
}

module.exports = lib
