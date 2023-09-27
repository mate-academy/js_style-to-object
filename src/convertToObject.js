'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const resultObject = {};
  const stylesArray = sourceString
    .split(';')
    .map((item) => item.trim())
    .filter(Boolean);

  stylesArray.forEach((style) => {
    const [key, value] = style.split(':')
      .map((part) => part.trim());

    resultObject[key] = value;
  });

  return resultObject;
}

module.exports = convertToObject;
