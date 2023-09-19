'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js]
 * (./stylesString.js)))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceToArray = sourceString.split('\n');
  const filterSource = sourceToArray
    .filter((item) => (item.length > 4));

  const result = filterSource.reduce((prev, item) => {
    const itemToArray = item.split(':');
    const [key, value] = itemToArray;

    return {
      ...prev, [key.trim()]: value.slice(0, -1).trim(),
    };
  }, {});

  return result;
}

module.exports = convertToObject;
