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
  const sourceArray = sourceString.split(';');
  const convertedToObject = {};

  for (let declaration of sourceArray) {
    declaration.trim();

    declaration = declaration.split(': ');

    if (!declaration[0] || !declaration[1]) {
      continue;
    }

    let key = declaration[0].split('').splice(1).join('');
    let value = declaration[1];

    key = key.trim();
    value = value.trim();

    convertedToObject[key] = value;
  }

  return convertedToObject;
}

module.exports = convertToObject;
