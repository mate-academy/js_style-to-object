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

  const bundlesToCheck = sourceString
    .replace('\n', '')
    .split(';');

  bundlesToCheck.forEach(bundle => {
    const trimmedBundle = bundle.trim();

    if (trimmedBundle) {
      const [property, value] = trimmedBundle
        .split(':')
        .map(item => item.trim());

      stylesObject[property] = value;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
