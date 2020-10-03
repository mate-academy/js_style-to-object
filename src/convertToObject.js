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
  const array = sourceString.split(';');
  const cssObj = {};
  const splittedArray = [];

  array.forEach(element => splittedArray.push(element.split(':')));

  for (let i = 0; i < splittedArray.length; i++) {
    if (splittedArray[i][0] && splittedArray[i][1]) {
      cssObj[splittedArray[i][0].trim()] = splittedArray[i][1].trim();
    }
  }

  return cssObj;
}

module.exports = convertToObject;
