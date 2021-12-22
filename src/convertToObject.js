'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssPropertiesObject = {};
  const lines = sourceString.split(';')
    .map(line => line.split(':'))
    .filter(line => line.length === 2);

  lines.forEach(line => {
    const property = line[0].trim();
    const value = line[1].trim();

    cssPropertiesObject[property] = value;
  });

  return cssPropertiesObject;
}

module.exports = convertToObject;
