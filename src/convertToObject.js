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
  const stylesArr = sourceString.split(';');

  const resultStylesObj = stylesArr.reduce((prev, item) => {
    const [key, value] = item.split(':');

    if (key && value) {
      prev[key.trim()] = value.trim();
    }

    return prev;
  }, {});

  return resultStylesObj;
}

module.exports = convertToObject;
