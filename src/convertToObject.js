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
  const splittedString = sourceString.split(';');
  const mappedString = splittedString.map(string =>
    string.replace(/\n/g, '').trim().split(':'));
  const secondMappedString = mappedString.map(string =>
    string.map(item => item.trim())).filter(item => item.length > 1);
  const result = secondMappedString.reduce(function(prev, current) {
    return {
      ...prev,
      [current[0]]: current[1],
    };
  }, {});

  return result;
}

module.exports = convertToObject;
