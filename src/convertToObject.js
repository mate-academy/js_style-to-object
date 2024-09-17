'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString.replace(/;/g, '')
    .split('\n')
    .filter(properties => {
      if (properties !== '') {
        const item = properties.split(':');

        if (item[0] !== undefined && item[1] !== undefined) {
          result[item[0].trim()] = item[1].trim();
        }
      }
    });

  return result;
}

module.exports = convertToObject;
