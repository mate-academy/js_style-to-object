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

    if (!key || !value) {
      return acc;
    }

    return { ...acc, [key.trim()]: value.trim() };
  }, {});

  return stylesObj;
}

module.exports = convertToObject;
