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
  const final = {};
  const key = [];
  const value = [];
  const arrayFromString = sourceString.replace(/[\n]/gi, '').split(';');

  for (let i = 0; i < arrayFromString.length; i++) {
    const index = arrayFromString[i].indexOf(':');

    key.push(arrayFromString[i].slice(0, index).trim());
    value.push(arrayFromString[i].slice(index + 1).trim());
  }

  for (let i = 0; i < key.length; i++) {
    if (key[i].length > 0) {
      final[key[i]] = value[i];
    }
  }

  return final;
}

module.exports = convertToObject;
