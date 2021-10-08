// eslint-disable-next-line import/no-unresolved
const merge = require('../src/index')

// const a = { name: 'lihh', age: 20 }
// const b = { name1: 'lihh', age1: 40 }
// console.log(merge([a, b]))
//
// const a1 = { name: 'lihh', age: 20 }
// const b1 = { name: 'lihh', age1: 40 }
// console.log(merge([a1, b1]))

// const a2 = { name: 'lihh', age: 20, arr: [1, 2] }
// const b2 = { name: 'lihh', age1: 40, arr: [3, 4] }
// console.log(merge([a2, b2]))
// console.log(merge([a2, b2], { arrayCover: false }))

const a3 = {
  name: 'lihh',
  age: 20,
  arr: [1, 2],
  school: {
    name: '哈哈',
    address: '1111',
    lineStyle: {
      width: 10,
      arr: [5, 6],
      color: [[1, '#ccc']]
    }
  }
}
const b3 = {
  name: 'lihh',
  age1: 40,
  arr: [3, 4],
  school: {
    name: '哈哈1',
    lineStyle: {
      arr: [7, 6],
      color: [[1, 'red']]
    }
  }
}
// JSON.stringify(merge([a3, b3], { arrayCover: false }))

const d1 = {
  name: 'lihh',
  school: {
    name: 'lihh1',
    width: 20,
    height: 20,
    lineStyle: {
      border: 1
    }
  }
}

const d2 = {
  age: 10,
  school: {
    width: 30
  }
}

console.log(merge(d1, d2))
