'use strict';

/**
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';')
    .map(property => property.split(':').map(item => item.trim()))
    .filter(item => item.length > 1)
    .reduce((cssProperties, [key, value]) => {
      cssProperties[key] = value;

      return cssProperties;
    }, {});
}

module.exports = convertToObject;
