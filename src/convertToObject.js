'use strict';

/**
 * Implement convertToObject function:
 *
 *  styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 *  CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssStyles = sourceString
    .split(';')
    .map(style => style.trim())
    .filter(style => style.length);

  return cssStyles.reduce((prev, current) => {
    const property = current.split(':').map(style => style.trim());

    return {
      ...prev,
      [property[0].trim()]: property[1],
    };
  }, {});
}

module.exports = convertToObject;
