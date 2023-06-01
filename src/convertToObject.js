'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssProperties = {};
  const processedArray = sourceString.split(';');

  processedArray.forEach((x) => {
    const indexColon = x.indexOf(':');

    if (indexColon > 0) {
      const key = x.slice(0, indexColon).trim();
      const values = x.slice(indexColon + 1).trim();

      cssProperties[key] = values;
    }
  });

  return cssProperties;
}

module.exports = convertToObject;
