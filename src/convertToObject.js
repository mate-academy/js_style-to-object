'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleMap = {};

  sourceString
    .split(';')
    .map((style) => style.split(':').map((item) => item.trim()))
    .filter((value) => value[0] !== '')
    .forEach((index) => {
      styleMap[index[0]] = index[1];
    });

  return styleMap;
}

module.exports = convertToObject;
