module.exports = hasValue;

function hasValue(object, value) {
  for (const el of Object.values(object)) {
    if (el == value) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(hasValue({ hello: 'bonjour', my: 'mon' }, 'bonjour')); //true
console.log(hasValue({ hello: 'bonjour', my: 'mon' }, 'hello')); //false
console.log(hasValue({ hello: 'bonjour', my: 'mon' }, 'tasty')); //false
