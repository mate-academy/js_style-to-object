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

  const lines = sourceString.split('\n');

  lines.forEach(line => {
    const match = line.match(/^\s*([\w-]+)\s*:\s*([^;]*)\s*;/);

    if (match) {
      const propertyName = match[1].trim();
      const propertyValue = match[2].trim();

      stylesObject[propertyName] = propertyValue;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
