'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(source) {
  const style = source.split(';')
    .map(rule => rule.split(':'))
    .filter(pair => pair.length === 2)
    .reduce((result, [key, value]) => {
      result[key.trim()] = value.trim();
      return result;
    }, {});
  return style;
}

module.exports = convertToObject;
