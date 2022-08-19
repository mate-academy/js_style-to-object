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
  const cssPropetiesArray = sourceString.split(';');

  const reduceCallback = (cssPropetiesObject, properties) => {
    const arr = properties.split(':');

    if (arr.length < 2) {
      return cssPropetiesObject;
    }

    const key = arr[0].trim();
    const value = arr[1].trim();

    return ({
      ...cssPropetiesObject,
      [key]: value,
    });
  };

  return cssPropetiesArray.reduce(reduceCallback, {});
}

module.exports = convertToObject;
