'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 *  (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(/[:;]/)
    .map(style => style.trim())
    .filter(style => style.length)
    .reduce((stylesObject, currentElement, index, stylesArr) => {
      if (index % 2 === 0) {
        const key = currentElement;
        const value = stylesArr[index + 1];

        stylesObject[key] = value;
      }

      return stylesObject;
    }, {});
}

module.exports = convertToObject;
