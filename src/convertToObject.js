'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleString = sourceString.replace(/\n/g, '');

  const styleArray = styleString.split(';');

  const styleArrayCorrect = styleArray.filter(x => x.length > 2);

  const result = {};

  styleArrayCorrect.map(style => {
    const index = style.indexOf(':');
    const key = style.slice(0, index).trim();
    const value = style.slice(index + 1).trim();

    result[key] = value;
  });

  return result;
}

module.exports = convertToObject;
