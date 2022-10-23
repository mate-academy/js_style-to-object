'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 *  [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const text = sourceString.split(';');

  const callback = (prev, word) => {
    const textarr = word.split(':');

    if (textarr.length === 2) {
      return {
        ...prev,
        [textarr[0].trim()]: textarr[1].trim(),
      };
    } else {
      return {
        ...prev,
      };
    }
  };
  const resalt = text.reduce(callback, {});

  return resalt;
}

module.exports = convertToObject;
