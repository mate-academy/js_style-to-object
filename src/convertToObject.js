'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const pair = sourceString.split(';').map(el => el.trim().split(':'));
  const filteredPair = pair.filter(el => el.length > 1);

  return filteredPair.reduce((accum, element) => {
    accum[element[0].trim()] = element[1].trim();

    return accum;
  }, {});
}

module.exports = convertToObject;
