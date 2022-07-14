'use strict';

/**
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString
    .split(';')
    .map(style => style
      .trim()
      .split(':')
      .map(el => el.trim())
      .join(':'))
    .filter(item => item !== '')
    .map(text => text.split(':'));

  return Object.fromEntries(styles);
}

module.exports = convertToObject;
