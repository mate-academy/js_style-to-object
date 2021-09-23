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
  return sourceString.split(';')
    .join('')
    .split('\n')
    .map(x => x.trim())
    .filter(x => x !== '')
    .map(a => a.split(':'))
    .reduce((all, property) => {
      return {
        ...all,
        [property[0].trim()]: property[1].trim(),
      };
    }, {});
}

module.exports = convertToObject;
