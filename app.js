
const { getUser } = require('./caching-service.js');
const { hashMap } = require('./caching-data-structures.js');

// console.log(linkedList, 'linked list');
console.time('getUser')
console.log(getUser(999999))
console.timeEnd('getUser')

console.time('getUser')
console.log(getUser(999998))
console.timeEnd('getUser')

console.time('getUser')
console.log(getUser(999997))
console.timeEnd('getUser')

console.time('getUser')
console.log(getUser(999997))
console.timeEnd('getUser')

console.time('getUser')
console.log(getUser(999996))
console.timeEnd('getUser')

console.time('getUser')
console.log(getUser(999995))
console.timeEnd('getUser')

console.time('getUser')
console.log(getUser(999994))
console.timeEnd('getUser')

console.time('getUser')
console.log(getUser(999994))
console.timeEnd('getUser')

console.time('getUser')
console.log(getUser(999992))
console.timeEnd('getUser')

console.time('getUser')
console.log(getUser(999997))
console.timeEnd('getUser')
console.log(hashMap.keys());