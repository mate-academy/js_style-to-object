'use strict';

/**
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
