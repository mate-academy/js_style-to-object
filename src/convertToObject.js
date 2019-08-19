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
  const propertyAndValue = sourceString.split(';');
  const stileList = {};
  const property = [];
  const value = [];

  for (let i = 0; i < propertyAndValue.length - 1; i++) {
    property[i] = propertyAndValue[i]
      .slice(
        3, (propertyAndValue[i].indexOf(':')));
    value[i] = propertyAndValue[i]
      .slice(
        (propertyAndValue[i].indexOf(':') + 1), propertyAndValue[i].length);
    stileList[property[i]] = value[i].trim();
  }

  return stileList;
}
module.exports = convertToObject;
