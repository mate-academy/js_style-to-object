'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((declaration) => declaration.trim())
    .reduce((acc, declaration) => {
      const [property, ...rest] = declaration.split(':');
      const value = rest.join(':');
      const prop = property && property.trim();
      const val = value && value.trim();

      if (prop && val) {
        acc[prop] = val;
      }

      return acc;
    }, {});
}

module.exports = convertToObject;
