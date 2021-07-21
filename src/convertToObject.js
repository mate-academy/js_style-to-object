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
  const mappedString = sourceString.split(';')
    .map(string => string.replace(/\n/g, '').trim()
      .split(':')).map(string => string.map(item => item.trim()))
    .filter(item => item.length > 1).reduce(function(prev, [key, value]) {
      return {
        ...prev,
        [key]: value,
      };
    }, {});

  return mappedString;
}

module.exports = convertToObject;
