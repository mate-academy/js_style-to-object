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
  const stylesArr = sourceString.split(';')
    .reduce((prev, current) => current.split(':').length === 2
      ? {
        ...prev,
        [current.split(':')[0].trim()]: current.split(':')[1].trim(),
      }
      : prev, {});

  return stylesArr;
}

module.exports = convertToObject;
