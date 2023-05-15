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

function convertToObject(stylesString) {
  const stylesArray = stylesString.split(';');
  const stylesObject = {};

  for (let i = 0; i < stylesArray.length; i++) {
    const style = stylesArray[i].trim();

    if (style !== '') {
      const [property, value] = style.split(':');
      const propertyName = property.trim();
      const propertyValue = value.trim();

      stylesObject[propertyName] = propertyValue;
    }
  }

  return stylesObject;
}

module.exports = convertToObject;
