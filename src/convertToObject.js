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
  const string = sourceString.split(';');
  const strTrim = string.filter(empty => empty.trim().length);
  const arrObj = strTrim.map(key => key.split(':').map(value => value.trim()));

  return arrObj.reduce((obj, value) => ({
    ...obj,
    [value[0]]: value[1],
  }), 0);
};

module.exports = convertToObject;
