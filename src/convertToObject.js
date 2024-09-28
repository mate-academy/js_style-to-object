'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  return sourceString.split(';').reduce((styles, styleString) => {
    const updatedStyles = { ...styles };
    const styleKeyValue = styleString.split(':');

    if (styleKeyValue[0] && styleKeyValue[1]) {
      updatedStyles[styleKeyValue[0].trim()] = styleKeyValue[1].trim();
    }

    return updatedStyles;
  }, {});
}

module.exports = convertToObject;
