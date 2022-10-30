'use strict';

/**
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesCSS = sourceString
    .split(';')
    .filter(elem => elem.includes(':'))
    .map(elem => elem.split(':')
      .map(str => str.trim()))
    .reduce((prev, elem) => {
      const key = elem[0];
      const value = elem[1];

      return {
        ...prev,
        [key]: value,
      };
    }, {});

  return stylesCSS;
}

module.exports = convertToObject;
