'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleList = sourceString
    .split(';')
    .map((rule) => rule.trim())
    .filter(Boolean);

  return styleList.reduce((stylesObject, styleRule) => {
    if (!styleRule.includes(':')) {
      return stylesObject;
    }

    const [property, value] = styleRule.split(':').map((part) => part.trim());

    if (property && value) {
      stylesObject[property] = value;
    }

    return stylesObject;
  }, {});
}

module.exports = convertToObject;
