'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const stylesArray = sourceString.split(';');

  const stylesObject = stylesArray.reduce((acc, item) => {
    const style = item.trim();

    if (style === '') {
      return acc;
    }

    const parts = style.split(':');

    const key = parts[0].trim();
    const value = parts[1].trim();

    return {
      ...acc,
      [key]: value,
    };
  }, {});

  return stylesObject;
}
module.exports = convertToObject;
