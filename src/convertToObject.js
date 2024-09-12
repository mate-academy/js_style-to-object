'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};

  sourceString.replace(/;/g, '').split('\n')
    .filter(prop => {
      if (prop !== '') {
        const element = prop.split(':');

        if (element[0] !== undefined && element[1] !== undefined) {
          obj[element[0].trim()] = element[1].trim();
        }
      }
    });

  return obj;
}

module.exports = convertToObject;
