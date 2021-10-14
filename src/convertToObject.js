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
  // write your code here
  return sourceString.split(';').reduce((obj, codeline) => {
    const propertyAndValue = codeline.split(':');

    if (propertyAndValue.length === 2) {
      obj[propertyAndValue[0].trim()] = propertyAndValue[1].trim();
    }

    return obj;
  }, {});
}

module.exports = convertToObject;
