'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((s) => s.trim())
    .filter(Boolean)
    .reduce((stylesObject, declaration) => {
      const [prop, value] = declaration.split(':');

      if (prop && value) {
        stylesObject[prop.trim()] = value.trim();
      }

      return stylesObject;
    }, {});
}

module.exports = convertToObject;
