'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};

  if (sourceString.length === 0) {
    return styles;
  }

  sourceString
    .split(';')
    .map((el) => el.trim())
    .filter((el) => el.includes(':'))
    .forEach((el) => {
      const [key, ...values] = el.split(':');
      const value = values.join(':').trim();

      if (key && value) {
        styles[key.trim()] = value;
      }
    });

  return styles;
}

module.exports = convertToObject;
