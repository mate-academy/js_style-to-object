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
  const regex = /;|\s{2,}/g;
  const delim = /: */;

  const strSplit = sourceString.split('\n')
    .map(line => line.replace(regex, '')
      .replace(delim, '|')
      .split('|')
    )
    .filter(line => line.length > 1);

  for (const line of strSplit) {
    result[line[0]] = String(line[1]);
  }

  return result;
}

module.exports = convertToObject;
