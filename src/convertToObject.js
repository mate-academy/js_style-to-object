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
  const splitExpressions = sourceString
    .split(';')
    .join('$')
    .split(':')
    .join('$')
    .split('$');

  const trimmedExpressions = splitExpressions.map(x => x.trim());

  const codeExpressions = trimmedExpressions.filter(x => x.length > 0);

  const entries = codeExpressions.reduce((rows, key, index) => (index % 2 === 0
    ? rows.push([key])
    : rows[rows.length - 1].push(key)) && rows, []);

  const sortedEntries = entries.sort((a, b) => (a[0].localeCompare(b[0])));

  const styleObject = Object.fromEntries(sortedEntries);

  return styleObject;
}

module.exports = convertToObject;
