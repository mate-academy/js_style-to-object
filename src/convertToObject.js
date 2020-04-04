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

  for (const item of properties) {
    const prop = item.split(':');

    if (!prop[0].match(/-|\w/)) {
      continue;
    }

    result[prop[0].trim()] = prop[1].trim();
  }

  return result;
}

module.exports = convertToObject;
