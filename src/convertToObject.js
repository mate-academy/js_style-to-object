'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const splittedArr = sourceString.split(';');

  for (let i = 0; i < splittedArr.length; i++) {
    const style = splittedArr[i];

    if (style) {
      const colonIndex = style.indexOf(':');

      if (colonIndex > -1) {
        const prop = style.slice(0, colonIndex).trim();
        const value = style.slice(colonIndex + 1).trim();

        result[prop] = value;
      }
    }
  }

  return result;
}

module.exports = convertToObject;
