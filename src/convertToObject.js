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
  const dirtyPairs = sourceString.split(';');

  const clearPairs = dirtyPairs
    .map(pair => {
      const clearEachProp = pair.split(':')
        .map(prop => prop.trim());

      return clearEachProp;
    })
    .filter(([key, value]) => key || value)
    .reduce((prev, pair) => {
      const [key, value] = pair;

      return {
        ...prev, [key]: value,
      };
    }, {});

  return clearPairs;
}

module.exports = convertToObject;
