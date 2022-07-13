'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an example in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const propertyObj = {};

  sourceString.split('\n').forEach(element => {
    if (element.trim().length > 2) {
      const propertySrring = element.split(':');
      const propertyName = propertySrring[0].trim();
      const propertyValue = propertySrring[1].replace(';', '')
        .trim();

      propertyObj[propertyName] = propertyValue;
    }
  });

  return propertyObj;
}

module.exports = convertToObject;
