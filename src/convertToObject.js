'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString.split(';').forEach((css) => {
    const [key, value] = css.split(':');

    if (typeof key === 'string' && typeof value === 'string') {
      const trimKey = key.trim();
      const trimValue = value.trim();

      if (trimKey !== '' && trimValue !== '') {
        result[trimKey] = trimValue;
      }
    }
  });

  return result;
}

module.exports = convertToObject;
