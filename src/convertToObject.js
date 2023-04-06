'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js]
 * (./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';')
    .map(item => item.trim())
    .filter(value => value !== '')
    .map(element => element.split(':'))
    .reduce(function(stylesCss, property) {
      const keyStyles = property[0].trim();
      const propertyStyles = property[1].trim();

      return {
        ...stylesCss, [keyStyles]: propertyStyles,
      };
    }, {});
}

module.exports = convertToObject;
