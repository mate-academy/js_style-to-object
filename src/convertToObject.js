'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 *  [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleArr = sourceString.split(';');

  return styleArr
    .reduce((previousValue, currentValue, currentIndex) => {
      const [key, value] = styleArr[currentIndex].split(':');

      if (key.length > 1 && value) {
        return {
          ...previousValue,
          [key.trim()]: value.trim(),
        };
      }

      return {
        ...previousValue,
      };
    }, {});
}

module.exports = convertToObject;
