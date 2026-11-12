'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleProperties = {};

  sourceString.split(';').forEach((rule) => {
    const colonIndex = rule.indexOf(':');

    if (colonIndex === -1) {
      return;
    }

    const property = rule.slice(0, colonIndex).trim();
    const value = rule.slice(colonIndex + 1).trim();

    if (property) {
      styleProperties[property] = value;
    }
  });

  return styleProperties;
}

module.exports = convertToObject;
