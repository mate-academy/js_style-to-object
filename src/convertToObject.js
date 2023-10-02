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
  const stylesArray = sourceString.split(';')
    .map(style => style.trim())
    .filter(Boolean);

  const stylesObject = {};

  stylesArray.forEach(style => {
    const [property, value] = style.split(':').map(s => s.trim());

    stylesObject[property] = value;
  });

  return stylesObject;
}

module.exports = convertToObject;
