'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const elements = sourceString
    .split(';')
    .map((element) => element.trim())
    .filter((element) => element.includes(':') && element.length !== 0);

  const stylesObject = elements.reduce((acc, element) => {
    const separatorIndex = element.indexOf(':');

    const property = element
      .slice(0, separatorIndex)
      .replace(/\s+/g, '')
      .trim();

    const value = element.slice(separatorIndex + 1).trim();

    acc[property] = value;

    return acc;
  }, {});

  return stylesObject;
}

module.exports = convertToObject;
