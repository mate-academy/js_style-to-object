'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newString = sourceString.replace(/\n/g, '');

  const array = newString.split(';');

  const object = {};

  array.forEach(element => {
    const colon = element.indexOf(':');
    let key = element.slice(0, colon);
    const keyChar = key.split('');

    while (keyChar[0] === ' ') {
      keyChar.shift();
    };

    while (keyChar[keyChar.length - 1] === ' ') {
      keyChar.pop();
    };

    key = keyChar.join('');

    let value = element.slice(colon + 1);
    const valueChar = value.split('');

    while (valueChar[0] === ' ') {
      valueChar.shift();
    };

    while (valueChar[valueChar.length - 1] === ' ') {
      valueChar.pop();
    };

    value = valueChar.join('');

    if (key.length !== 0 && value.length !== 0) {
      object[key] = value;
    }
  });

  return object;
}

module.exports = convertToObject;
