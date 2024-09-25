'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitedStyles = sourceString.split(';');

  const trimmedStyles = splitedStyles.map((style) => {
    return style.split(':').map((word) => word.trim());
  });

  const result = trimmedStyles.reduce((acc, [properties, value]) => {
    if (properties) {
      acc[properties] = value;
    }

    return acc;
  }, {});

  return result;
}

module.exports = convertToObject;
