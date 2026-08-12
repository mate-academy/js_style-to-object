'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};
  const pairs = sourceString
    .split(';')
    .map((pair) => pair.trim())
    .filter((val) => val !== '');

  for (const pair of pairs) {
    const [key, value] = pair.split(':').map((val) => val.trim());

    stylesObject[key] = value;
  }

  return stylesObject;
}

module.exports = convertToObject;
