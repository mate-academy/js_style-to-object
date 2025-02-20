'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((el) => el.trim())
    .filter((el) => el !== '')
    .reduce((acc, rule) => {
      const keyValue = rule.split(':');
      const propertyName = keyValue[0].trim();
      const value = keyValue.slice(1).join(':').trim();

      acc[propertyName] = value;

      return acc;
    }, {});
}

module.exports = convertToObject;
