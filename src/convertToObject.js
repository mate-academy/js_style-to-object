'use strict';

const stylesString = require('./stylesString');

/**
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
