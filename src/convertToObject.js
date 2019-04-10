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
  const result = {};
  const inputArr = sourceString.split(';');
  inputArr.pop();
  inputArr.forEach((item) => {
    const [key, value] = item.split(':');
    result[key.trim()] = value.trim();
  });
  return result;
}

module.exports = convertToObject;
