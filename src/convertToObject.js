'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const resultArray = {};

  sourceString
    .split(';')
    .filter(style => style.trim())
    .forEach(text => {
      const [name, value] = text.split(':');

      resultArray[name.trim()] = value.trim();
    });

  return resultArray;
}

module.exports = convertToObject;
