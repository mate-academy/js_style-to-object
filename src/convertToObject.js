'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((item) => item.trim())
    .filter((article) => article.includes(':'))
    .map((string) => {
      const [key, value] = string.split(':').map((word) => word.trim());

      return { [key]: value };
    })
    .reduce((prev, curr) => {
      return { ...prev, ...curr };
    }, {});
}

module.exports = convertToObject;
