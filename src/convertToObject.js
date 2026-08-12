'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const pairs = sourceString
    .split(';')
    .map((pair) => pair.trim())
    .filter((val) => val !== '');

  return pairs.reduce((stylesObject, pair) => {
    const [key, value] = pair.split(':').map((val) => val.trim());
    return { ...stylesObject, [key]: value };
  }, {});
}

module.exports = convertToObject;
