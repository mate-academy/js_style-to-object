'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};
  const stylesArray = sourceString.split(';');

  for (let i = 0; i < stylesArray.length; i++) {
    const style = stylesArray[i].trim().split(': ');
    styleObject[style[0]] = style[1];
  }

  return styleObject;
}

module.exports = convertToObject;
