'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl
 * in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const formattedString = sourceString
    .replace(/\s+/g, ' ')
    .replace(/ :/g, ':')
    .split(';')
    .filter(style => style !== ' ')
    .map(style => style.trim());

  const stringToObject = formattedString.reduce(function(acc, curr) {
    acc[curr.split(':')[0]] = curr.split(': ')[1];

    return acc;
  }, {});

  return stringToObject;
}

module.exports = convertToObject;
