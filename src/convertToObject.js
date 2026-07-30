'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const cssStyles = sourceString.split(';');

  const cssStylesFiltered = cssStyles.filter((style) => {
    return style.trim().length !== 0;
  });

  const styleParts = cssStylesFiltered.map((cssStyle) => {
    return cssStyle.split(':');
  });

  return styleParts.reduce((acc, current) => {
    acc[current[0].trim()] = current[1].trim();

    return acc;
  }, {});
}

module.exports = convertToObject;
