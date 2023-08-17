'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *(see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const cssObject = sourceString
    .split(';')
    .filter(Boolean)
    .map(style => style.trim().split(':'))
    .reduce((acc, [property, ...values]) => {
      if (property && values.length > 0) {
        const formattedProperty = property.trim();
        const formattedValue = values.join(':').trim();

        acc[formattedProperty] = formattedValue;
      }

      return acc;
    }, {});

  return cssObject;
}

module.exports = convertToObject;
