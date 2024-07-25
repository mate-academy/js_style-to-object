'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylePairs = sourceString
    .split(';')
    .map((declaration) => declaration.trim())
    .filter(Boolean);

  const styleObject = {};

  stylePairs.forEach((pair) => {
    const [property, value] = pair.split(':').map((part) => part.trim());

    styleObject[property] = value;
  });

  return styleObject;
}

module.exports = convertToObject;
