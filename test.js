let Float = require('./index')

console.log(0.31 - 0.22 + (0.3 / 0.4), Float(0.31, '-', 0.22, '+', [0.3, '/', 0.4]))

console.log(12 - 0.123 + (0.24 / 0.12), Float(12, '-', 0.123, '+', [0.24, '/', 0.12]))

console.log(0.1 + 0.2, Float(0.1, '+', 0.2))

console.log(0.3 - 0.2, Float(0.3, '-', 0.2))

console.log(0.1 * 0.2, Float(0.1, '*', 0.2))

console.log(0.3 / 0.4, Float(0.3, '/', 0.4))
