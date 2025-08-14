'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  return Object.fromEntries(
    sourceString
      .split(';')
      .map((el) => el.trim())
      .filter((noEmpty) => noEmpty)
      .map((item) => {
        const keyValue = item.split(':');
        const key = keyValue[0].trim();
        const value = keyValue[1].trim();

        return [key, value];
      }),
  );
}

module.exports = convertToObject;
