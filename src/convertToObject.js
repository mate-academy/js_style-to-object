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
  return sourceString
    .replace(/\n/g, '')
    .split(`;`)
    .map(style => style.trim())
    .filter(Boolean)
    .map(style => style
      .split(`:`)
      .map(item => item.trim())
    )
    .reduce((acc, [key, value]) => {
      return {
        ...acc,
        [key]: value,
      };
    }, {});
}

module.exports = convertToObject;
