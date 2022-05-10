'use strict';

const stylesString = require('./stylesString');

/**
 * Implement convertToObject function:
 *
 * Function takes a string with
 * styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related
 * CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  /* const str = sourceString.replaceAll('\n', ''); */
  const chaoticArray = sourceString.split(';');
  const keysArray = [];
  const valuesArray = [];
  const stylesObject = {};

  chaoticArray.forEach(element => {
    const partOfElement = element.split(':');

    keysArray.push(partOfElement[0].trim());
    valuesArray.push((partOfElement[1] || '').trim());
  });

  for (let i = 0; i < keysArray.length; i++) {
    if (keysArray[i] !== '') {
      stylesObject[keysArray[i]] = valuesArray[i];
    }
  }

  return stylesObject;
}
convertToObject(stylesString);
module.exports = convertToObject;
