'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS
 * properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const StylesObject = sourceString.split(';')
    .map(style =>
      style.trim()).filter(style => style)
    .reduce((previous, current) => {
      const keyValue = current.split(':');
      const key = keyValue[0].trim();
      const val = keyValue[1].trim();

      return {
        ...previous,
        [key]: val,
      };
    }, {});

  return StylesObject;
}

module.exports = convertToObject;
