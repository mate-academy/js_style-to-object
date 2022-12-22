'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js]
 * (./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let propStrings = sourceString.split(';').map(property => property.trim());

  propStrings = propStrings.filter(item => item.length > 0);

  const arrays = propStrings.map(item =>
    item.split(':').map(str => str.trim())
  );

  return Object.fromEntries(arrays);
}

module.exports = convertToObject;
