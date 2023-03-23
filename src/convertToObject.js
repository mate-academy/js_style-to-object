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
  // now my dreams consist only of split, map, map, filter, filter and reduce...
  const strToObject = sourceString
    .split(';')
    .map(el => el.split(':')
      .map(space => space.trim())
      .filter(zeroValue => zeroValue !== ''))
    .filter(space => space.length > 0)
    .reduce((accumulator, [key, value]) => {
      accumulator[key] = value;

      return accumulator;
    }, {});

  return strToObject;
}

module.exports = convertToObject;
