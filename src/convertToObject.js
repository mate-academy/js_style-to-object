'use strict';

// const stylesString = require('./stylesString');

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((objAcc, elem) => {
    const substring = elem.split(':').map((part) => part.trim());

    if (substring.length === 2) {
      const [key, value] = substring;

      objAcc[key] = value;
    }

    return objAcc;
  }, {});
}

module.exports = convertToObject;
