'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssProperties = {};
  const getPair = sourceString.split(';');
  const getValue = getPair.map((s) => s.trim()).filter(Boolean);

  getValue.forEach((pair) => {
    const index = pair.indexOf(':');

    if (index === -1) {
      return;
    }

    const property = pair.slice(0, index).trim();
    const value = pair.slice(index + 1).trim();

    if (property) {
      cssProperties[property] = value;
    }
  });

  return cssProperties;
}

module.exports = convertToObject;
