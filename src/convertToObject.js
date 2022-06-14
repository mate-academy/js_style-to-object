'use strict';

/**
 * Implement convertToObject function:
 *
 // eslint-disable-next-line max-len
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
  const arrayStyles = sourceString
    .split(';')
    .filter(style => style.trim().length !== 0).map(cssProperty => {
      const propertyWithValue = cssProperty.split(':');

      return [propertyWithValue[0].trim(), propertyWithValue[1].trim()];
    });

  return Object.fromEntries(arrayStyles);
}

module.exports = convertToObject;
