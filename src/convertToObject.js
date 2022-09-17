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
  const stylesObject = {};
  const splittingStyles = sourceString.split(';');
  const deletingInvalid = splittingStyles
    .map(style => style.split(':'))
    .filter(element => element.length !== 1);

  deletingInvalid.forEach(style => {
    stylesObject[style[0].trim()] = style[1].trim();
  });

  return stylesObject;
}

module.exports = convertToObject;
