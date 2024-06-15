'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleEntries = sourceString.split(';');

  const stylesObj = styleEntries.reduce((prev, style) => {
    const [key, value] = style.split(':', 2);

    if (key.trim() && value.trim()) {
      prev[key.trim()] = value.trim();
    }

    return prev;
  }, {});

  return stylesObj;
}

module.exports = convertToObject;
