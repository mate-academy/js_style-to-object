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
  const stylesList = sourceString.trim().split('\n');
  const stylesListClean = stylesList.map(style => style.split(':'));

  return stylesListClean.reduce((formattedStyles, [property, value]) => {
    if (property && value) {
      formattedStyles[property.trim()] = value.slice(0, -1).trim();
    }

    return formattedStyles;
  }, {});
}

module.exports = convertToObject;
