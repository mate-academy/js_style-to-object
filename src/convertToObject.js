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
  const stylesArr = sourceString
    .split(';')
    .map(style => style.trim())
    .filter(style => style.length);

  return stylesArr.reduce((prev, current) => {
    const property = current.split(':').map(style => style.trim());

    return {
      ...prev,
      [property[0].trim()]: property[1],
    };
  }, {});
}

module.exports = convertToObject;
