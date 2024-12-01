'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString
    .split(';')
    .map(item => item.split(':'))
    .reduce((acc, entries) => {
      if (entries.length === 2) {
        acc[entries[0].trim()] = entries[1].trim();
      }

      return acc;
    }, {});

  return styles;
}

module.exports = convertToObject;
