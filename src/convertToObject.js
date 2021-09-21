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
  const stringToArray = sourceString.split(';');

  return stringToArray.reduce((acc, item) => {
    if (!item.includes(':')) {
      return acc;
    }

    const [propertyName, propertyValue] = item.split(':');

    return {
      ...acc,
      [propertyName.trim()]: propertyValue.trim(),
    };
  }, {});
}

module.exports = convertToObject;
