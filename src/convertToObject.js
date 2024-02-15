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

  const stylesObj = stylesArr.map((item) => {
    const [key, value] = item.split(':');

    if (!key || !value) {
      return null;
    }

    return { [key.trim()]: value.trim() };
  });

  const resultStylesObj = stylesObj.reduce((prev, item) => {
    if (!item) {
      return prev;
    }

    return {
      ...prev, ...item,
    };
  }, {});

  return resultStylesObj;
}

module.exports = convertToObject;
