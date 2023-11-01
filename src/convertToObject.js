'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const strings = sourceString
    .trim()
    .split(';');

  const properties = strings
    .map(property => property
      .split(':')
      .map(string => string.trim())
    );

  const props = properties
    .filter(prop => prop.length > 1);

  const result = props
    .reduce((styles, property) => {
      if (property.length === 0) {
        return styles;
      }

      styles[`${property[0]}`] = property[1];

      return styles;
    }, {});

  return result;
}

module.exports = convertToObject;
