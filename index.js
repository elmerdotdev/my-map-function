function myMap(cbFn) {
  return function (arr) {
    const result = []
    arr.forEach((element, index) => {
      result.push(cbFn(element, index))
    })
    return result
  }
}

module.exports = myMap