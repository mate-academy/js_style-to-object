'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleArray = sourceString
    .split(';')
    .map((element) => {
      return element.trim();
    })
    .filter((element) => {
      return element !== '';
    })
    .map((element) => {
      return element
        .split(':')
        .map((item) => item.trim())
        .filter((item) => item !== '');
    });

  return styleArray.reduce((accum, [key, value]) => {
    accum[key] = value;

    return accum;
  }, {});
}

module.exports = convertToObject;
