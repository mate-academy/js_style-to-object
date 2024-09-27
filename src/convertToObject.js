'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssProps = sourceString.split(';');
  const selectorObj = {};

  for (let item of cssProps) {
    item = item.split(':');

    if (item[0] && item[1]) {
      const key = item[0].trim();
      const value = item[1].trim();

      selectorObj[key] = value;
    }
  }

  return selectorObj;
}

module.exports = convertToObject;
