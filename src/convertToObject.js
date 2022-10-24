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
  const sourceStringInArray = sourceString.split(';');

  const callback = (prev, string) => {
    const stringArray = string.split(':');

    if (stringArray.length === 2) {
      return {
        ...prev,
        [stringArray[0].trim()]: stringArray[1].trim(),
      };
    } else {
      return {
        ...prev,
      };
    }
  };
  const resalt = sourceStringInArray.reduce(callback, {});

  return resalt;
}

module.exports = convertToObject;
