'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 *  (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // Remove unnecessary whitespace and split the string into lines
  const lines = sourceString.trim().split(';');

  const stylesObject = {};

  // Process each line
  lines.forEach(line => {
    // Split each line into property and value using colon as a separator
    const [property, value] = line.split(':').map(item => item.trim());

    // Add the property and value to the stylesObject
    if (property && value) {
      stylesObject[property] = value;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
