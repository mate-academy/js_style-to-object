'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(stringStyles) {
  const arrayString = stringStyles.split(';').filter(Boolean);
  const modArray = arrayString
    .map((a) => {
      const [key, value] = a.trim().split(':');

      if (!key || !value) {
        return null;
      }

      return [key.trim(), value.trim()];
    })
    .filter(Boolean);

  const newObj = Object.fromEntries(modArray);

  return newObj;
}

module.exports = convertToObject;
