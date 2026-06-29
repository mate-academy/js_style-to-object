'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const elements = sourceString.split(';');

  const stylesObject = elements.reduce((prev, x) => {
    if (x.trim() === '') {
      return prev;
    }

    const parts = x.trim().split(':');
    const left = parts[0].trim();
    const right = parts[1].trim();

    return {
      ...prev,
      [left]: right,
    };
  }, {});

  return stylesObject;
}

module.exports = convertToObject;
