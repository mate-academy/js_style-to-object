'use strict';

/**
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArr = sourceString
    .split(';')
    .filter(style => style.trim() !== '');
  const resultObj = {};

  stylesArr.forEach(style => {
    const [property, value] = style
      .split(':')
      .map(styleRule => styleRule.trim());

    resultObj[property] = value;
  });

  return resultObj;
}

module.exports = convertToObject;
