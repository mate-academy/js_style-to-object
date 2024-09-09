'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(stylesString) {
  const cleanedStr = stylesString.trim();

  const styleRules = cleanedStr.split(';').filter((item) => item.trim() !== '');

  const styleObj = {};

  styleRules.forEach((rule) => {
    const [key, value] = rule.split(':');

    if (key && value) {
      styleObj[key.trim()] = value.trim();
    }
  });

  return styleObj;
}

module.exports = convertToObject;
