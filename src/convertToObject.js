'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssProperties = {};
  const splittedStr = sourceString.split(';');

  splittedStr.pop();
  splittedStr.forEach(item => {
    const newArr = item.split(':');
    cssProperties[newArr[0].trim()] = newArr[1].trim();
  });
  return cssProperties;
}

module.exports = convertToObject;
