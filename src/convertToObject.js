'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cleared = sourceString.split(';');

  return cleared.reduce((accum, style) => {
    const n = style.split(':').map((element) => element.trim());

    const [key, value] = n;

    accum[key] = value;

    return accum;
  }, {});
}

module.exports = convertToObject;
