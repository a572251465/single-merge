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
  return [...new Set([].concat(source, target))]
}

const mergeOptionsHandle = (source, target, arrayCover = true) => {
  const keys = Object.keys(target)
  let i = 0
  for (; i < keys.length; i += 1) {
    const index = keys[i]
    const item = target[index]
    if (isObject(item)) {
      if (!isObject(source[index])) {
        source[index] = {}
      }
      mergeOptionsHandle(source[index], item, arrayCover)
    } else {
      if (isArray(item) && !arrayCover) {
        source[index] = arrayHandle(source[keys[i]], item)
      } else {
        source[index] = item
      }
    }
  }
}

const merge = (...mergeOptions) => {
  if (
    mergeOptions.length < 1 ||
    mergeOptions.some((item) => !isArray(item) && !isObject(item))
  ) {
    throw new Error('The parameter must be an object or an array.')
  }

  let mergeTarget = []
  let options = { arrayCover: true }
  if (isArray(mergeOptions[0])) {
    // eslint-disable-next-line prefer-destructuring
    mergeTarget = mergeOptions[0]
    if (isObject(mergeOptions[1])) {
      // eslint-disable-next-line prefer-destructuring
      options = mergeOptions[1]
    }
  } else {
    mergeTarget = mergeOptions
  }
  const { arrayCover = true } = options
  const mergeData = mergeTarget.filter((item) => isObject(item))
  const result = {}
  let i = 0
  for (; i < mergeData.length; i += 1) {
    const item = mergeData[i]
    mergeOptionsHandle(result, item, arrayCover)
  }

  return result
}
module.exports = merge
