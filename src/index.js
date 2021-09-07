const isType = (type) => {
  const upCaseType = type.charAt(0).toUpperCase() + type.slice(1)
  return (val) => {
    const expResult = `[object ${upCaseType}]`
    return Object.prototype.toString.call(val) === expResult
  }
}

const isArray = isType('Array')
const isObject = isType('Object')

const arrayHandle = (source, target) => {
  if (!isArray(source)) {
    return target
  }
  return [].concat(source, target)
}

const mergeOptions = (source, target, arrayCover = true) => {
  const keys = Object.keys(target)
  let i = 0
  for (; i < keys.length; i += 1) {
    const index = keys[i]
    const item = target[index]
    if (isObject(item)) {
      if (!isObject(source[index])) {
        source[index] = {}
      }
      mergeOptions(source[index], item, arrayCover)
    } else {
      if (isArray(item) && !arrayCover) {
        source[index] = arrayHandle(source[keys[i]], item)
      } else {
        source[index] = item
      }
    }
  }
}

const merge = (mergeTarget = [], options = {}) => {
  if (!isArray(mergeTarget)) return mergeTarget
  const { arrayCover = true } = options
  const mergeData = mergeTarget.filter((item) => isObject(item))
  const result = {}
  let i = 0
  for (; i < mergeData.length; i += 1) {
    const item = mergeData[i]
    mergeOptions(result, item, arrayCover)
  }

  return result
}
module.exports = merge
