'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const array = sourceString.split(';');
  const callback = (prev, key) => {
    const value = key.split(':');

    if (value[1] === undefined) {
      return {
        ...prev,
      };
    };

    return {
      ...prev,
      [value[0].trim()]: value[1].trim(),
    };
  };

  const newObject = array.reduce(callback, {});

  return newObject;
}

module.exports = convertToObject;
