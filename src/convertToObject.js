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
  let pairs = sourceString.split(';');

  pairs = pairs.map(e => e.trim()).filter(el => el.length > 0);

  for (let i = 0; i < pairs.length; i++) {
    const valueKey = pairs[i].split(':');

    result[valueKey[0].trim()] = valueKey[1].trim();
  }

  return result;
}

module.exports = convertToObject;
