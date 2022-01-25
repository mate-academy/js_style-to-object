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
  const stylesList = {};

  sourceString
    .split(';')
    .map((style) => {
      const styleProp = style.split(':')[0];
      const styleValue = style.split(':')[1];

      if (styleValue !== undefined) {
        stylesList[styleProp.trim()] = styleValue.trim();
      }
    });

  return stylesList;
}

module.exports = convertToObject;
