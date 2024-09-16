'use strict';

/**
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
