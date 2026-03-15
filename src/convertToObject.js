'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter(Boolean)
    .reduce((cssProperties, item) => {
      if (!item.includes(':')) {
        return cssProperties;
      }

      const parts = item.split(':');
      const key = parts[0].split(/\s+/).filter(Boolean).join('');
      const value = parts.slice(1).join(':').trim();

      cssProperties[key] = value;

      return cssProperties;
    }, {});
}

module.exports = convertToObject;
