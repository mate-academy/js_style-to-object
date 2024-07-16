'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssObject = sourceString
    .split(';')
    .map((item) => item.split(':').map((value) => value.trim()))
    .map((item) => item.filter((value) => value !== ''))
    .filter((item) => item.length !== 0)
    .reduce((objCSS, item) => {
      objCSS[item[0]] = item[1];

      return objCSS;
    }, {});

  return cssObject;
}

module.exports = convertToObject;

// .map((item) => item.map((value) => value.trim()))
