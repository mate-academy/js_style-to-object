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
  let newString = '';
  const newObj = {};

  for (let i = 0; i < sourceString.length; i++) {
    newString += sourceString[i];
  }

  newString = newString.split(';');

  for (let j = 0; j < newString.length; j++) {
    if (typeof newString[j].split(':')[0] === 'string'
    && typeof newString[j].split(':')[1] === 'string') {
      newObj[newString[j].split(':')[0].trim()]
      = newString[j].split(':')[1].trim();
    }
  }

  return newObj;
}

module.exports = convertToObject;
