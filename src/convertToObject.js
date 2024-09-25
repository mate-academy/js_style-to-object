'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceArray = sourceString
    .split(';')
    .filter(line => /\S/.test(line))
    .map(line => line.split(':')
      .map(propAndValue => propAndValue.trim()));

  return Object.fromEntries(sourceArray);
}

module.exports = convertToObject;
