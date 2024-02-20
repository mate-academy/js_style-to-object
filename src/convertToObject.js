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
  const stylesObject = {};

  sourceString.split(';')
    .map(item => item.trim())
    .filter(item => item.trim())
    .forEach(element => {
      const elementsArray = element.split(':');
      const objectName = elementsArray[0].trim();
      const objectValue = elementsArray[1].trim();

      stylesObject[objectName] = objectValue;
    });

  return stylesObject;
}

module.exports = convertToObject;
