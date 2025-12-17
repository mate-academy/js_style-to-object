'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const applyStyle = (styleLine) => {
    const [property, rawValue] = styleLine.split(':');

    stylesMap[property.trim()] = rawValue.trim();
  };

  const stylesMap = {};

  sourceString
    .split(';')
    .map((element) => element.trim())
    .filter((element) => element.length > 1)
    .forEach(applyStyle);

  return stylesMap;
}

module.exports = convertToObject;
