'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArray = sourceString.split(';');

  const stylesObj = stylesArray.reduce((acc, style) => {
    const [key, value] = style.split(':');

    const trimmedKey = key?.trim();
    const trimmedValue = value?.trim();

    if (trimmedKey && trimmedValue) {
      acc[key.trim()] = value.trim();
    }

    return acc;
  }, {});

  return stylesObj;
}

module.exports = convertToObject;
