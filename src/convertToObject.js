'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return Object.fromEntries(
    sourceString
      .split(';')
      .map((prop) => prop.trim())
      .filter((prop) => prop.includes(':'))
      .map((prop) => {
        const [key, value] = prop.split(':');

        return [key.trim(), value.trim()];
      }),
  );
}

module.exports = convertToObject;
