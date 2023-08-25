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
  // write your code here
  const stylesArray = sourceString.split(';')
    .map(style => style.trim())
    .filter(style => style.length > 0);

  const styleObject = {};

  stylesArray.forEach(style => {
    const [property, value] = style.split(':').map(s => s.trim());

    styleObject[property] = value;
  });

  return styleObject;
}

module.exports = convertToObject;
