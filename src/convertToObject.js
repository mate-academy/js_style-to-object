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
  const arr = sourceString.split(';')
    .map(style => style.split(':').map(every => every.trim()))
    .filter(el => el.length > 1);

  const result = arr.reduce((prev, style) => {
    const element = { ...prev };

    element[style[0]] = style[1];

    return element;
  }, {});

  return result;
}

module.exports = convertToObject;
