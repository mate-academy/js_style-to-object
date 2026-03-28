'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const lines = sourceString.trim().split(';');
  const styleObject = lines.reduce((acc, item) => {
    const [key, rest] = item.trim().split(':');

    if (key && rest !== undefined) {
      acc[key.trim()] = rest.trim();
    }

    return acc;
  }, {});

  return styleObject;
}

module.exports = convertToObject;
