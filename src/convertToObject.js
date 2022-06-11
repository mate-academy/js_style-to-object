'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrayString = sourceString
    .split('\n')
    .filter(item => item.trim().length > 1)
    .map(x => x.split(':'));

  const callback = (array, property) => {
    const [objKey, objValue] = property;

    return {
      ...array,
      [objKey.trim()]: objValue.slice(0, -1).trim(),
    };
  };

  const result = arrayString.reduce(callback, {});

  return result;
}

module.exports = convertToObject;
