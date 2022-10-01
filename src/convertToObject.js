'use strict';

/**
 * Implement convertToObject function:
 *
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssObject = {};

  const cssArray = sourceString.split(';')
    .map(string => string.trim())
    .filter(string => string !== '');

  cssArray.forEach(element => {
    const property = element.split(':')[0].trim();
    const value = element.split(':')[1].trim();

    cssObject[property] = value;
  });

  return cssObject;
}

module.exports = convertToObject;
