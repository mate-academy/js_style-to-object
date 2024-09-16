'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map(item => item.split(':'))
    .reduce((obj, prop) => {
      if (prop[0] !== undefined && prop[1] !== undefined) {
        obj[prop[0].trim()] = prop[1].trim();
      }

      return obj;
    }, {});
}

module.exports = convertToObject;
