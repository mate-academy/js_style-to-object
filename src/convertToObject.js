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
  const formattedCss = {};

  sourceString
    .split(';')
    .forEach(rule => {
      const [property, value] = rule.split(':');

      if (property && value) {
        const formattedProperty = removeSpaces(property);

        formattedCss[formattedProperty] = value.trim();
      }
    });

  return formattedCss;
}

function removeSpaces(str) {
  return str.replace(/\s/g, '');
}

module.exports = convertToObject;
