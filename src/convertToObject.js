'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const convertedObject = sourceString
    .split(';')
    .reduce((accumulator, rule) => {
      const [key, val] = rule.split(':');

      if (key && val) {
        accumulator[key.trim()] = val.trim();
      }

      return accumulator;
    }, {});

  return convertedObject;
}

module.exports = convertToObject;
