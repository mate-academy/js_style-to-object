/* eslint-disable max-len */
'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splittedString = sourceString.split('\n');
  const styleProperties = splittedString.filter((row) => {
    return row && row.includes(':');
  });
  const styleAsObject = {};

  styleProperties.forEach((property) => {
    const [key, value] = property.split(':');

    styleAsObject[key.trim()] = value.slice(0, -1).trim();
  });

  return styleAsObject;
}

module.exports = convertToObject;
