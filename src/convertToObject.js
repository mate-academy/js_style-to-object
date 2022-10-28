'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const propObj = {};

  sourceString.split(';')
    .filter(prop => prop.includes(':'))
    .forEach(prop => {
      const propSplited = prop.split(':');

      propObj[propSplited[0].trim()] = propSplited[1].trim();
    });

  return propObj;
}

module.exports = convertToObject;
