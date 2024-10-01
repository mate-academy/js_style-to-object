'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const separateParams = sourceString.split(';');
  const cssStyles = {};

  separateParams.forEach((el) => {
    const secondsSplit = el.split(':');

    if (secondsSplit[0] && secondsSplit[1]) {
      cssStyles[secondsSplit[0].trim()] = secondsSplit[1].trim();
    }
  });

  return cssStyles;
}

module.exports = convertToObject;
