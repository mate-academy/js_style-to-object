'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (
 * see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS proper
 * ties are keys
 * and values are the values of relate
 * d CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const appliedStyles = (previous, component) => ({
    ...previous, [component[0].trim()]: component[1].trim(),
  });

  const cssStyles = sourceString
    .split(';')
    .map(element => element.trim().split(':'))
    .filter(object => object.length > 1)
    .reduce(appliedStyles, {});

  return cssStyles;
}

module.exports = convertToObject;
