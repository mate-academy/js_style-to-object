'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const propertiesAndValues = sourceString.split(';');
  const resultObj = {};

  for (const rule of propertiesAndValues) {
    const a = rule.split(':');

    if (a[1] !== undefined
      && a[0] !== undefined
    ) {
      resultObj[a[0].trim()] = a[1].trim();
    }
  }

  return resultObj;
}

module.exports = convertToObject;
