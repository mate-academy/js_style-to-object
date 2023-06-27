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
  const sourceArr = sourceString.split(';')
    .map(style => style.trim())
    .filter(style => style !== '');

  const sourceObject = {};

  sourceArr.forEach(style => {
    const [key, value] = style.split(':').map(parts => parts.trim());

    sourceObject[key] = value;
  });

  return sourceObject;
}

module.exports = convertToObject;
