'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
   (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
   (see an example in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const properties = sourceString
    .split('\n')
    .map(prop => prop.trim())
    .filter(prop => prop.length > 1);

  const entries = properties.map((prop) => (
    prop
      .slice(0, prop.length - 1)
      .split(/\s*:\s*/g)
      .map(value => value.trim())
  ));

  return Object.fromEntries(entries);
}

module.exports = convertToObject;
