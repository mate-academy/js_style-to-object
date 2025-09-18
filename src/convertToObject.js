'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesList = sourceString
    .split(';')
    .map((el) => el.trim())
    .map((el) => {
      const parts = el.split(':');

      return parts.map((part) => part.trim());
    })
    .filter((element) => element.length >= 2 && element[0] !== '');

  const stylesMap = {};

  stylesList.forEach((element) => {
    const [key, value] = element;

    stylesMap[key] = value;
  });

  return stylesMap;
}

module.exports = convertToObject;
