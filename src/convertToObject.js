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

  const obj = {};

  sourceArray.forEach(item => {
    const arraySplit = item.split(':');
    const arrayMapped = arraySplit.map(element => {
      return element.trim();
    });

    if (arrayMapped[0] === '') {
      return false;
    };
    obj[arrayMapped[0]] = arrayMapped[1];
  });

  return obj;
}

module.exports = convertToObject;
