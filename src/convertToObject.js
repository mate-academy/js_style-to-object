'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const rawCssStylesArray = sourceString
    .split(';')
    .filter((str) => str.trim() !== '');

  const cssStylesObject = rawCssStylesArray.reduce((acc, str) => {
    const separator = str.indexOf(':');
    const key = str.slice(0, separator).trim();
    const value = str.slice(separator + 1).trim();

    acc[key] = value;

    return acc;
  }, {});

  return cssStylesObject;
}

module.exports = convertToObject;
