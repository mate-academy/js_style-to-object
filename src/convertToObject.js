'use strict';

/**
 * Implement convertToresultect function:
 *
 * Function takes string with styles
 * and returns resultect where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {resultect}
 */
function convertToresultect(sourceString) {
  const result = {};
  const parsed = sourceString.split(';');

  parsed.forEach(item => {
    const temp = item.split(':');

    if (temp.length > 1) {
      result[temp[0].trim()] = temp[1].trim();
    }
  });

  return result;
}

module.exports = convertToresultect;
