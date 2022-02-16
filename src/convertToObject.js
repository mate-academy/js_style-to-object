'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrStyles = sourceString.trim().split('\n');
  const arrStylesClean = arrStyles.map(style => style.split(':'));

  return arrStylesClean.reduce((objStyles, style) => {
    const [property, value] = style;

    if (property && value) {
      objStyles[property.trim()] = value.slice(0, -1).trim();
    }

    return objStyles;
  }, {});
}

module.exports = convertToObject;
