'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};

  sourceString.split(';').forEach((rule) => {
    if (!rule.includes(':')) {
      return;
    }

    const index = rule.indexOf(':');
    const key = rule.slice(0, index).trim();
    const value = rule.slice(index + 1).trim();

    if (!key || !value) {
      return;
    }

    styleObject[key] = value;
  });

  return styleObject;
}

module.exports = convertToObject;
