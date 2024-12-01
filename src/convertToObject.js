'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = sourceString.split(';').reduce((acc, keyValue) => {
    const style = keyValue.split(':');

    if (style.length === 2) {
      const [key, value] = style;

      return {
        ...acc,
        [key.trim()]: value.trim(),
      };
    } else {
      return acc;
    }
  }, {});

  return result;
}

module.exports = convertToObject;
