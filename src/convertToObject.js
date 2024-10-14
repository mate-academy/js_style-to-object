'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssStylesObject = {};
  const splitStyles = sourceString.split(';');

  const filtered = splitStyles.filter((item) => item.trim().length);

  const keyValuePairs = filtered.map((words) => words.split(':'));

  keyValuePairs.forEach(([key, value]) => {
    cssStylesObject[key.trim()] = value.trim();
  });

  return cssStylesObject;
}

module.exports = convertToObject;
