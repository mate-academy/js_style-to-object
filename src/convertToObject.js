'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const regEx = /\n/g;

  return sourceString
    .replace(regEx, '')
    .split(';')
    .map((rule) => rule.trim())
    .filter((rule) => rule !== '')
    .reduce((cssObject, rule) => {
      const tmp = rule.split(':');
      const value = tmp[1]
        .split(',')
        .map((item) => item.trim())
        .join(',\n          ');

      return {
        ...cssObject,
        [tmp[0].trim()]: value,
      };
    }, {});
}

module.exports = convertToObject;
