'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const string = sourceString.split(';');
  const callback = function(prev, str) {
    if (str.replace(/\s/g, '').length !== 0) {
      const key = str.split(':')[0].replace(/\s/g, '');
      const value = str.split(':')[1].trim();

      return {
        ...prev,
        [key]: value,
      };
    }

    return prev;
  };

  const result = string.reduce(callback, {});

  return result;
}

module.exports = convertToObject;
