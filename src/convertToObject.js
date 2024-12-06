'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceStringToArray = sourceString
    .split(';')
    .map((item) => item.trim())
    .filter((item) => item.length > 0);
  const sourceStringToObject = Object.fromEntries(
    sourceStringToArray.map((item) => {
      const [key, value] = item.split(':', 2);

      return [key.trim(), value.trim()];
    })
  );

  return sourceStringToObject;
}

module.exports = convertToObject;
