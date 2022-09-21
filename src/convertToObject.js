'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 *  in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const convertedObject = {};

  const splitSourceStringtoComma = sourceString.split(';');
  const splitSourceStringtoDot
    = splitSourceStringtoComma.map(item => item.split(':'));
  const trimmedSourceString
    = splitSourceStringtoDot.map(array => array.map(item => item.trim()));

  trimmedSourceString.forEach(item => {
    if (item[0]) {
      convertedObject[item[0]] = item[1];
    }
  });

  return convertedObject;
}

module.exports = convertToObject;
