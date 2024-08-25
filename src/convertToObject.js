'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here

  return sourceString.split(';').reduce((acc, item) => {
    if (item.trim().length > 0) {
      const propertyArray = item.trim().split(':');
      const key = propertyArray[0].trim();
      const value = propertyArray[1].trim();

      acc[`${key}`] = value;

      return acc;
    } else {
      return acc;
    }
  }, {});
}

module.exports = convertToObject;
