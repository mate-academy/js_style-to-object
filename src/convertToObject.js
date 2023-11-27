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
  const normalizedString = sourceString
    .split(';')
    .map((child) => child.trim())
    .filter(params => params.length > 1);

  const result = normalizedString.reduce((prev, child) => {
    const [key, value] = child
      .split(':')
      .map((a) => a.trim());

    return {
      ...prev,
      [key]: value,
    };
  }, {});

  return result;
}

module.exports = convertToObject;
