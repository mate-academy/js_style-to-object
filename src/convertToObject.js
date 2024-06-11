'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylePairs = sourceString
    .split(';')
    .filter((pair) => pair.trim() !== '');

  const stylesObject = {};

  stylePairs.forEach((pair) => {
    const [key, value] = pair.split(':').map((part) => part.trim());

    stylesObject[key] = value;
  });

  return stylesObject;
}

module.exports = convertToObject;
