'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((part) => part.trim())
    .filter((part) => part !== '' && part.includes(':'))
    .map((declaration) => {
      const [prop, ...valueParts] = declaration.split(':');

      return [prop.trim(), valueParts.join(':').trim()];
    })
    .filter(([key, value]) => key !== '' && value !== '')
    .reduce((acc, [key, value]) => {
      acc[key] = value;

      return acc;
    }, {});
}

module.exports = convertToObject;
