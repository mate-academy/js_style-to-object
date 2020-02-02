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
  let objectStyles = {};
  let arrayOfStrings = sourceString.split('\n');
  let arrayOfarray = arrayOfStrings.map(item => item.split(':'));
  arrayOfarray.forEach(item => {
    objectStyles[item[0].trim()] = item[1].trim().split(';').shift();
  });
  return objectStyles;
}

module.exports = convertToObject;
