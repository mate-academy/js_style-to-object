'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS
 * properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const textFromString = sourceString.trim().split(';');

  const callback = (acc, current) => {
    const separatedStyles = current.split(':');

    if (separatedStyles.length !== 2) {
      return acc;
    }

    return {
      ...acc,
      [separatedStyles[0].trim()]: separatedStyles[1].trim(),
    };
  };

  return textFromString.reduce(callback, {});
}

module.exports = convertToObject;
