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
  const validatedStyles = sourceString.split(';')
    .map(style => style.split(':'))
    .filter(element => element.length !== 1)
    .reduce(callback, {});

  return validatedStyles;
}

function callback(acc, prop) {
  const styleName = prop[0].trim();
  const styleValue = prop[1].trim();

  return {
    ...acc,
    [styleName]: styleValue,
  };
}

module.exports = convertToObject;
