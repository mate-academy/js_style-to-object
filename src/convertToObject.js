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
  const splitStr = sourceString.split(';');

  const stylesObj = splitStr.reduce((prev, property) => {
    const splitProperty = property.split(':');

    if (splitProperty.length > 1) {
      const key = splitProperty[0].trim();
      const value = splitProperty[1].trim();

      return {
        ...prev,
        [key]: value,
      };
    } else {
      return prev;
    }
  }, {});

  return stylesObj;
}

module.exports = convertToObject;
