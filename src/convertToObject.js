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

  const strSplit = sourceString.split(';')
    .map(line => line.split(':')
      .map(each => each.trim())
    )
    .filter(line => line.length > 1);

  strSplit.forEach(line => {
    result[line[0]] = String(line[1]);
  });

  return result;
}

module.exports = convertToObject;
