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
  const convertedObj = {};
  const splittedStr = sourceString.split(';');

  splittedStr.forEach((item) => {
    const splittedItem = item.split(':');

    if (splittedItem.length === 2) {
      const key = splittedItem[0].trim();
      const value = splittedItem[1].trim();

      convertedObj[key] = value;
    }
  });

  return convertedObj;
}

module.exports = convertToObject;
