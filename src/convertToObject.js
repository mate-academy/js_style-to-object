'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';')
    .reduce((accumulator, rule) => {
      if (rule.includes(':')) {
        const [key, value] = rule.split(':');

        accumulator[key.trim()] = value.trim();
      }

      return accumulator;
    }, {});
}

module.exports = convertToObject;
