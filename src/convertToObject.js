'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const arrayOfValues = sourceString.split(';');
  const object = arrayOfValues.reduce((prev, element) => {
    const [key, value] = element.split(':');

    if (key.trim() && value.trim()) {
      return {
        ...prev,
        [key.trim()]: value.trim(),
      };
    } else {
      return { ...prev };
    }
  }, {});

  return object;
}

module.exports = convertToObject;
