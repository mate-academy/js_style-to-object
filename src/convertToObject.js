'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((el) => el.trim())
    .reduce((acc, rule) => {
      const [prop, value] = rule.split(':').map((s) => s.trim());

      if (prop && value) {
        acc[prop] = value;
      }

      return acc;
    }, {});
}

module.exports = convertToObject;
