'use strict';

/**
 * @param {string} sourceString
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map(line => line.trim())
    .filter(line => line && line.includes(':'))
    .reduce((stylesObject, line) => {
      const [property, ...valueParts] = line.split(':');

      const key = property.trim();
      const value = valueParts.join(':').trim();

      if (key && value) {
        stylesObject[key] = value;
      }

      return stylesObject;
    }, {});
}

module.exports = convertToObject;
