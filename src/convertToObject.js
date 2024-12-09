'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssStyleObject = {};
  const cssStyles = sourceString.split(';');

  cssStyles.forEach((style) => {
    const [key, value] = style.trim().split(':');

    if (key && value) {
      cssStyleObject[key.trim()] = value.trim();
    }
  });

  return cssStyleObject;
}

module.exports = convertToObject;
