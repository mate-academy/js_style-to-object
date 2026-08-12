'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((param) => param.split(':'))
    .filter((param) => param[0] && param[1])
    .map((param) => {
      return [param[0].trim(), param[1].trim()];
    })
    .reduce((previous, current) => {
      previous[current[0]] = current[1];

      return previous;
    }, {});
}

module.exports = convertToObject;
