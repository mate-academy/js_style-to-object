'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const arrayOfStyle = sourceString.split(';');
  const result = {};

  arrayOfStyle.forEach((elem) => {
    const style = elem.split(':');

    if (style[1]) {
      result[style[0].replace(/\s+/g, '')] = style[1].trim();
    }
  });

  return result;
}

module.exports = convertToObject;
