'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((declaration) => declaration.trim())
    .filter((declaration) => declaration)
    .reduce((sourceObject, declaration) => {
      const [property, ...valueParts] = declaration.split(':');

      if (property && valueParts.length) {
        const value = valueParts.join(':').trim();

        sourceObject[property.trim()] = value;
      }

      return sourceObject;
    }, {});
}

module.exports = convertToObject;
