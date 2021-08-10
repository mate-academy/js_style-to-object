'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const resultStyles = {};

  sourceString.replace(/\r?\n|\r/g, '')
    .split(';')
    .forEach(line => {
      const split = line.trim().split(':');

      if (!split[0].length) {
        return;
      }

      resultStyles[split[0].trim()] = split[1].trim();
    });

  return resultStyles;
}

module.exports = convertToObject;
