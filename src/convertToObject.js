'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};

  sourceString.split(';')
    .filter(rule => rule.includes(':'))
    .forEach(rule => {
      const parts = rule.split(':');

      styles[parts[0].trim()] = parts[1].trim();
    });

  return styles;
}

module.exports = convertToObject;
