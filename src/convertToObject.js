'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((item) => item.split(':').map((value) => value.trim()))
    .map((item) => item.filter((value) => value !== ''))
    .filter((item) => item.length !== 0)
    .reduce((cssObject, item) => {
      cssObject[item[0]] = item[1];

      return cssObject;
    }, {});

}

module.exports = convertToObject;
