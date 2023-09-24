'use strict';

/**
 * Implement convertToObject function:
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};

  sourceString
    .split(';')
    .filter(style => style.includes(':'))
    .forEach(element => {
      const [param, value] = element.split(':');

      styles[param.trim()] = value.trim();
    });

  return styles;
}

module.exports = convertToObject;
