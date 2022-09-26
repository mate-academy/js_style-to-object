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
  const stylesToArray = sourceString
    .split(';')
    .map(element => element.split(':').map(el => el.trim()));

  const convertedStyles = stylesToArray.reduce((styles, pair) => {
    const [property, value] = pair;

    if (pair.length >= 2) {
      return {
        ...styles,
        [property]: value,
      };
    }

    return styles;
  }, {});

  return convertedStyles;
}

module.exports = convertToObject;
