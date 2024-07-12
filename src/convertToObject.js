/* eslint-disable prettier/prettier */
'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .reduce((prev, el) => {
      const [property, value] = el
        .split(':')
        .map((elem) => elem.trim());

      prev[property] = value;

      return prev;
    }, {});
}

module.exports = convertToObject;
