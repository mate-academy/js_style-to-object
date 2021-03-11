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
 */
function convertToObject(sourceString) {
  const result = {};

  const properties = sourceString.split(';');

  let pair;

  for (let i = 0; i < properties.length; i++) {
    if (properties[i].trim().length === 0) {
      continue;
    }

    pair = properties[i].split(':');
    pair[0] = pair[0].trim();
    pair[1] = pair[1].trim();

    result[pair[0]] = pair[1];
  }

  return result;
}

module.exports = convertToObject;
