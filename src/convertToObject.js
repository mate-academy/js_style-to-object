'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleDeclarations = sourceString
    .split(';')
    .map((string) => string.trim().split(':'));

  const trimmedStyleDeclarations = styleDeclarations
    .filter((innerArr) => innerArr.length === 2)
    .map((element) => element.map((item) => item.trim()));

  const styleObject = trimmedStyleDeclarations.reduce((acc, style) => {
    const [key, value] = style;

    acc[key] = value;

    return acc;
  }, {});

  return styleObject;
}

module.exports = convertToObject;
