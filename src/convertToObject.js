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
  const splittedSource = sourceString.split(';');

  const convertedObject = {};

  splittedSource.forEach(style => {
    const [property, value] = style.split(':');

    if (property && value) {
      const trimmedProperty = property.trim();
      const trimmedValue = value.trim();

      convertedObject[trimmedProperty] = trimmedValue;
    }
  });

  return convertedObject;
}

module.exports = convertToObject;
