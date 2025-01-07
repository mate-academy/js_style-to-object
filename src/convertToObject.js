'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitStylesString = sourceString.split(';');

  const obj = {};

  splitStylesString.forEach((el) => {
    if (el !== ' ' && el !== '') {
      const eachStyle = el.split(':').map((e) => e.trimStart().trim());
      const key = eachStyle[0];
      const value = eachStyle[1];

      obj[key] = value;
    }
  });

  return obj;
}

module.exports = convertToObject;
