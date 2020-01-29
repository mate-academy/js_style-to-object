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
  const resultObject = {};
  let arrOfProp = sourceString.split(';');
  for (let property of arrOfProp) {
    let [key, value] = property.split(':');
    if (value !== undefined) {
      resultObject[key.trim()] = value.trim();
    }
  }
  return resultObject;// write your code here
};

module.exports = convertToObject;
