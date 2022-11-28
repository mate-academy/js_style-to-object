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
  const properties = sourceString.split(';');
  const pairs = {};

  const getPairs = (pair) => {
    const key = pair.slice(0, pair.indexOf(':')).trim();
    const value = pair.slice(pair.indexOf(':') + 1).trim();

    if (key.length && value.length) {
      pairs[key] = value;
    }
  };

  properties.map(getPairs);

  return pairs;
}

module.exports = convertToObject;
