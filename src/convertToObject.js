'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of
 * related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arr = sourceString.split(';');
  const newObject = {};
  const arrFix = arr
    .map(element => element.trim())
    .filter(element => element !== '');

  arrFix.forEach(element => {
    if (element) {
      const elementSplit = element.split(':');

      newObject[elementSplit[0].trim()] = elementSplit[1].trim();
    }
  });

  return newObject;
}

module.exports = convertToObject;
