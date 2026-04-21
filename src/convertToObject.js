'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((acc, declaration) => {
    const [property, ...valueParts] = declaration.split(':');
    const key = property ? property.trim() : '';
    const value = valueParts.join(':').trim();

    if (key && value) {
      acc[key] = value;
    }

    return acc;
  }, {});
}

module.exports = convertToObject;
