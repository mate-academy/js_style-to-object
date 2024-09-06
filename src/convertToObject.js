'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceStringToArray = sourceString.split(';');

  return sourceStringToArray.reduce((accum, currentStyle) => {
    const currentStyleToArray = currentStyle.split(':');

    const [key, value] = currentStyleToArray;

    if (value) {
      accum[key.trim()] = value.trim();
    }

    return accum;
  }, {});
}

module.exports = convertToObject;
