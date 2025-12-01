'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sources = sourceString
    .split(';')
    .map((s) => s.trim())
    .filter((s) => s.length);

  const styleObject = sources.reduce((acc, source) => {
    const colonIndex = source.indexOf(':');
    const property = source.slice(0, colonIndex).trim();
    const value = source.slice(colonIndex + 1).trim();

    acc[property] = value;

    return acc;
  }, {});

  return styleObject;
}

module.exports = convertToObject;
