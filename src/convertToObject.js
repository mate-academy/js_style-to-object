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
  // write your code here
  const styles = sourceString.split(';');
  const convertedObject = {};

  styles.forEach(style => {
    const property = style.split(':');

    if (property.length === 2) {
      const propertyName = property[0].trim();
      const propertyValue = property[1].trim();

      convertedObject[propertyName] = propertyValue;
    }
  });

  return convertedObject;
}

module.exports = convertToObject;
