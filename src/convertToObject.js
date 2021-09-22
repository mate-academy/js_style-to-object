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
  const resultObject = {};

  const splitedString = sourceString.split(';');

  for (const item of splitedString) {
    const splitedItem = item.split(':').map(el => el.trim());

    if (splitedItem[0] !== '' || splitedItem[0] !== '') {
      resultObject[splitedItem[0]] = splitedItem[1];
    }
  }

  return resultObject;
}

module.exports = convertToObject;
