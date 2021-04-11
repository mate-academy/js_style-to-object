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
  const lines = sourceString.split('\n');
  const keyIndex = 0;
  const valueIndex = 1;

  return lines.filter(line => line.includes(':'))
    .reduce((config, line) => {
      const splitedLine = line.split(':');
      const key = splitedLine[keyIndex].trim();
      const value = splitedLine[valueIndex].replace(';', '').trim();

      return {
        ...config,
        [key]: value,
      };
    }, {});
}

module.exports = convertToObject;
