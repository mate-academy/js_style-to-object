'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceArray = sourceString.split(';');

  const convertsObject = {};

  sourceArray.forEach((style) => {
    const firstKeyIndex = style.indexOf(':');

    if (firstKeyIndex !== -1) {
      const key = style.slice(0, firstKeyIndex).trim();
      const firstValueIndex = firstKeyIndex + 1;
      const value = style.slice(firstValueIndex).trim();

      convertsObject[key] = value;
    }
  });

  return convertsObject;
}

module.exports = convertToObject;
