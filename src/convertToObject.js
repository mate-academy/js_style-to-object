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
  const result = sourceString.split(';')
    .map(string => string.trim());
  const resultObject = {};

  result.forEach(style => {
    const [objectName, objectValue] = style.split(':')
      .map(value => value.trim());

    if (objectName && objectValue) {
      resultObject[objectName] = objectValue;
    }
  });

  return resultObject;
}

module.exports = convertToObject;
