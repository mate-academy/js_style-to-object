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
  const sourceStringArr = sourceString.split(';').map(
    item => item.split(':')
  ).map(
    ([prop, value]) => (
      {
        [prop.trim()]: (value + '').trim(),
      }
    )
  );

  const result = {};

  Object.assign(result, ...sourceStringArr);

  for (const key in result) {
    if (!key) {
      delete result[key];
    }
  }

  return result;
}

module.exports = convertToObject;
