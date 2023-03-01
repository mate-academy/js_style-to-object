'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 // eslint-disable-next-line max-len
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};
  const propertyPairs = sourceString
    .split(';')
    .map(propPair => propPair.split(':'))
    .filter(propPair => propPair.length > 1);

  propertyPairs.forEach(propPair => {
    const [key, value] = propPair;

    styleObject[key.trim()] = value.trim();
  });

  return styleObject;
}

module.exports = convertToObject;
