'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 * git test
 */

function convertToObject(sourceString) {
  const cssObj = {};

  sourceString.split(';')
    .forEach(prop => {
      const splittedProp = prop.split(':');

      if (splittedProp.length > 1) {
        const rule = splittedProp[0].trim();
        const value = splittedProp[1].trim();

        cssObj[rule] = value;
      }
    });

  return cssObj;
}

module.exports = convertToObject;
