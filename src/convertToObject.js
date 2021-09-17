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
  const withoutSeparator = sourceString.split(';')
    .map(e => e.split(':')
      .map(i => i.trim()))
    .filter(el => el.length > 1);

  for (let i = 0; i < withoutSeparator.length; i++) {
    result[withoutSeparator[i][0]] = withoutSeparator[i][1];
  }

  return result;
}

module.exports = convertToObject;
