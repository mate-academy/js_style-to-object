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
  const styleObject = {};
  const styleArray = sourceString.split(';');

  styleArray.forEach(style => {
    const [property, value] = style.split(':');

    if (property && value) {
      const propertyName = property.trim();
      const propertyValue = value.trim();

      styleObject[propertyName] = propertyValue;
    }
  });

  return styleObject;
}

module.exports = convertToObject;
