'use strict';

const stylesString = require('./stylesString');

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const keysArray = [];
  const valuesArray = [];
  const formatedString = sourceString.split(';');
  const outputObject = {};

  formatedString.forEach(elem => {
    keysArray.push(elem.slice(0, elem.indexOf(':')).trim());
    valuesArray.push(elem.slice(elem.indexOf(':') + 1).trim());
  });

  keysArray.forEach((elem, index) => {
    if (elem !== '') {
      outputObject[elem] = valuesArray[index];
    }
  });

  return outputObject;
}

convertToObject(stylesString);

module.exports = convertToObject;
