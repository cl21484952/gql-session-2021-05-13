import _ from 'lodash'

// In case to filter falsy values
var object = { a: 1, b: null, c: 3, d: false, e: undefined }

// Underscore/Lodash
var result = _.pickBy(object)
console.log(result)
// output: {a: 1, c: 3}

// Native
function pickBy(object) {
  const obj = {}
  for (const key in object) {
    if (object[key]) {
      obj[key] = object[key]
    }
  }
  return obj
}
result = pickBy(object)
console.log(result)
// output: {a: 1, c: 3}



