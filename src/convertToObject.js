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

  const getPairs = (pair) => {
    return pair
      .split(':')
      .map((entry) => entry.trim())
      .filter((entry) => entry);
  };

  const makeObject = (prev, pair) => {
    const [key, value] = pair;

    return {
      ...prev,
      [key]: value,
    };
  };

  return properties
    .map(getPairs)
    .filter((pair) => pair.length)
    .reduce(makeObject, {});
}

module.exports = convertToObject;
