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
  const cssArray = sourceString.split('\n');

  const cssObjects = cssArray.map(
    a => {
      const xxx = a.trim().slice(0, -1).split(':');

      if (xxx.length > 1 && xxx !== undefined) {
        return { [xxx[0].trim()]: xxx[1].trim() };
      }
    });
  const result = {};

  for (const item of cssObjects) {
    if (item !== undefined) {
      Object.assign(result, item);
    }
  }

  return result;
}

module.exports = convertToObject;
