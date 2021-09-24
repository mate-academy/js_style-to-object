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
  const result = {};

  const divideString = sourceString.split(';');

  for (const item of divideString) {
    const divideItem = item.split(':').map(element => element.trim());

    if (divideItem[0].length !== 0) {
      result[divideItem[0]] = divideItem[1];
    }
  }

  return result;
}

module.exports = convertToObject;
