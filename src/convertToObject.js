'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const expectedObj = sourceString
    .split(';')
    .map(keysValues => {
      return keysValues
        .split(':')
        .map(noSpace => noSpace.trim());
    })
    .reduce((accumulator, currentValue) => {
      accumulator[currentValue[0]] = currentValue[1];

      return accumulator;
    }, {});

  delete expectedObj[''];

  return expectedObj;
}

module.exports = convertToObject;
