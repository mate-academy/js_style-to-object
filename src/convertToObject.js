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
  const obj = {};

  const str = sourceString.replace(/;{2,}/g, ';').replace(/;$/, '');
  const arr = str.split(';');

  arr.forEach(item => {
    const splittedItem = item.split(':');

    if (splittedItem[0] && splittedItem[1]) {
      obj[splittedItem[0].trim()] = splittedItem[1].trim();
    }
  });

  return obj;
}

module.exports = convertToObject;
