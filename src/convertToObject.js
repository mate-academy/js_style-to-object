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
  const stylesArr = sourceString.trim().split(';');
  stylesArr.pop();
  const stylesObj = {};

  stylesArr.forEach((property) => {
    const [key, value] = property.split(':');
    stylesObj[key.trim()] = value.trim();
  });

  return stylesObj;
}

module.exports = convertToObject;
