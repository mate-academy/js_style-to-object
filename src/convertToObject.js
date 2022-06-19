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
function addStyles(prev, current) {
  const key = current[0].trim();
  const property = current[1].trim();

  return ({
    ...prev,
    [key]: property,
  });
};

function convertToObject(sourceString) {
  const styles = sourceString
    .split(';')
    .map(style => style.split(':'))
    .filter(style => style.length > 1)
    .reduce(addStyles, {});

  return styles;
}

module.exports = convertToObject;
