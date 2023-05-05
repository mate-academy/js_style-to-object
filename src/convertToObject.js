'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 *  (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS
 * properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const separately = sourceString.split(';');
  const parts = separately.map(element => element.trim().split(':'));
  const correctPair = [];

  for (let pair = 0; pair < parts.length; pair++) {
    if (parts[pair].length === 2) {
      correctPair.push(parts[pair]);
    }
  }

  const callback = (prev, style) => ({
    ...prev,
    [`${style[0].trim()}`]: `${style[1].trim()}`,
  });
  const result = correctPair.reduce(callback, {});

  return result;
}

module.exports = convertToObject;
