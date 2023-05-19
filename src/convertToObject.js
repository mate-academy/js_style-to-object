'use strict';

/**
 * Implement convertToObject function:
 *
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};

  sourceString
    .split(';')
    .join('')
    .split('\n')
    .filter(item => item.trim() !== '')
    .map(item => item.trim().split(':'))
    .forEach(style => {
      const [key, value] = style;

      styles[key.trim()] = value.trim();
    });

  return styles;
}

module.exports = convertToObject;
