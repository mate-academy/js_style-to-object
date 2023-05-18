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
  // write your code here
  const singleStyle = sourceString.split(';');
  const stylesObject = singleStyle.reduce((obj, style) => {
    const [key, value] = style.split(':');

    if (value) {
      return {
        ...obj,
        [key.trim()]: value.trim(),
      };
    }

    return { ...obj };
  }, {});

  return stylesObject;
}

module.exports = convertToObject;
