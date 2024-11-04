'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (typeof sourceString !== 'string') {
    return {};
  }

  const styleArray = sourceString.split(';');
  const styleObject = {};

  styleArray.forEach((style) => {
    if (style.trim()) {
      const [key, ...valueParts] = style.split(':');

      if (key.trim() && valueParts.length > 0) {
        const value = valueParts.join(':').trim();

        styleObject[key.trim()] = value;
      }
    }
  });

  return styleObject;
}

module.exports = convertToObject;
