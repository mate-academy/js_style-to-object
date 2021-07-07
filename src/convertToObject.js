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
  sourceString.split(';').forEach(
    propertyAndValue => {
      propertyAndValue = propertyAndValue.trim().split(': ');
      obj[propertyAndValue[0]] = propertyAndValue[1];
    }
  );
  return obj;
}

module.exports = convertToObject;
