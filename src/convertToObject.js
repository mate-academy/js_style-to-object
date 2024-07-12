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
      const [attribut, value] = el
        .split(':')
        .map((elem) => elem.trim());

      prev[attribut] = value;

      return prev;
    }, {});
}

module.exports = convertToObject;
