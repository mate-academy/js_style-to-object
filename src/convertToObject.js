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
    .filter((item) => item.includes(':'))
    .map((item) => {
      const [key, value] = item.split(':').map((str) => str.trim());

      return { [key]: value };
    })
    .reduce((acc, styleObject) => Object.assign(acc, styleObject), {});
}

module.exports = convertToObject;
