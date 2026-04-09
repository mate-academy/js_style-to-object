'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .reduce((result, rule) => {

    const [property, value] = rule
      .split(':')
      .map((part) => part.trim());

    if (property && value) {
      result[property] = value;
    }

    return result;
  }, {});
}

module.exports = convertToObject;
