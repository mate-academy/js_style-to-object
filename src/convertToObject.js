'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const pairs = sourceString.split(';').filter((pair) => pair.trim() !== '');

  return pairs.reduce((cssProperties, pair) => {
    const [key, value] = pair.split(':').map((s) => s.trim());

    cssProperties[key] = value;

    return cssProperties;
  }, {});
}

module.exports = convertToObject;
