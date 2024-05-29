'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let cssRules = sourceString.split(';');

  cssRules = cssRules.filter((item) => item.trim() !== '');

  return cssRules
    .map((item) => item.split(':').map((elem) => elem.trim()))
    .reduce((acc, item) => {
      acc[item[0]] = item[1];

      return acc;
    }, {});
}

module.exports = convertToObject;
