'use strict';

/**
 * @param {string} source
 *
 * @returns {Object}
 */
function convertToObject(source) {
  return source.split(';').reduce((stylesObject, style) => {
    const trimmed = style.trim();

    if (!trimmed) {
      return stylesObject;
    }

    const parts = trimmed.split(':');
    const property = parts[0].trim();
    const value = parts.slice(1).join(':').trim();

    return {
      ...stylesObject,
      [property]: value,
    };
  }, {});
}

module.exports = convertToObject;
