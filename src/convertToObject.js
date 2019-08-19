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
  const PropertyAndValue = sourceString.split(';');
  const stileList = {};
  const property = [];
  const value = [];

  for (let i = 0; i < PropertyAndValue.length - 1; i++) {
    property[i] = PropertyAndValue[i].slice(3,
      (PropertyAndValue[i].indexOf(':')));
    value[i] = PropertyAndValue[i].slice((PropertyAndValue[i].indexOf(':') + 1),
      PropertyAndValue[i].length);
    stileList[property[i]] = value[i].trim();
  }

  return stileList;
}
module.exports = convertToObject;
