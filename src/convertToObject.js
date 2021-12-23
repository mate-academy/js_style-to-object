'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssStyles = {};

  const splitString = sourceString.split(';').map(item => item.trim());

  splitString.forEach(item => {
    const splitItem = item.split(':').map(element => element.trim());

    if (splitItem.length === 2) {
      cssStyles[splitItem[0]] = splitItem[1];
    }
  });

  return cssStyles;
}

module.exports = convertToObject;
