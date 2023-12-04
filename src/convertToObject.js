'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const stylePairs = sourceString.split(';')
    .map(pair => pair.trim()).filter(Boolean);

  const styleObject = stylePairs.reduce((obj, style) => {
    const [key, value] = style.split(':').map(item => item.trim());

    obj[key] = value;

    return obj;
  }, {});

  return styleObject;
}

module.exports = convertToObject;
