'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return Object.fromEntries(
    sourceString
      .split(';')
      .map((value) => value.trim())
      .filter((value) => value.length > 0)
      .map((value) => {
        const cutIndex = value.indexOf(':');

        return [value.slice(0, cutIndex), value.slice(cutIndex + 1)];
      })
      .map((value) => value.map((row) => row.trim()))
      .filter((value) => value[0].length > 0 && value[1].length > 0),
  );
}

module.exports = convertToObject;
