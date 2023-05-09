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
  const eachString = sourceString.split(';');

  const callback = (newObject, stringStyle) => {
    const [key, value] = stringStyle.split(':');

    if (key.trim().length !== 0) {
      return {
        ...newObject,
        [key.toString().trim()]: [value].toString().trim(),
      };
    }

    return { ...newObject };
  };

  const result = eachString.reduce(callback, {});

  return result;
}

module.exports = convertToObject;
