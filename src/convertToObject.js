'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 * git test
 */

function convertToObject(sourceString) {
  const cssObj = {};

  sourceString.split(';')
    .forEach(prop => {
      const coupleProp = prop.split(':');

      if (coupleProp.length > 1) {
        const rule = coupleProp[0].substr(1, coupleProp[0].length).trim();
        const value = coupleProp[1].trim();

        cssObj[rule] = value;
      }
    });

  return cssObj;
}

module.exports = convertToObject;
