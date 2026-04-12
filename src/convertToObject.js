'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssRules = sourceString.split(';').filter((str) => str.includes(':'));

  return cssRules.reduce((acc, styleStr) => {
    const [key, value] = styleStr.split(':');
    const styleKey = key.trim();
    const styleValue = value.trim();

    acc[styleKey] = styleValue; // комментарий

    return acc;
  }, {});
}

module.exports = convertToObject;
