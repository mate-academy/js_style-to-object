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
  const arrayToStyles = sourceString
    .split(';')
    .reduce((stylesList, stylesParameters) => {
      const [property, value] = stylesParameters.split(':');

      if (value !== undefined) {
        stylesList[property.trim()] = value.trim();
      }

      return stylesList;
    }, {});

  return arrayToStyles;
}

module.exports = convertToObject;
