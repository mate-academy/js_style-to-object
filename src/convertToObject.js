'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = Object.fromEntries(
    sourceString
      .split(';')
      .map((item) => item.trim())
      .filter((item) => item !== '')
      .map((item) => {
        const [key, ...valueParts] = item.split(':');

        if (!key || valueParts.length === 0) {
          return null;
        }

        return [key.trim(), valueParts.join(':').trim()];
      })
      .filter(Boolean),
  );

  return result;
}

module.exports = convertToObject;
