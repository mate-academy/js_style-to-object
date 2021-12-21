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
  const done = [];
  const result = {};

  for (const item of sourceString.split(';')) {
    const split = item.split(':');
    const temp = [];

    for (const value of split) {
      temp.push(value.trim());
    }

    done.push(temp);
  }

  for (const item of done) {
    if (item.length > 1) {
      result[item[0]] = item[1];
    }
  }

  return result;
}

module.exports = convertToresultect;
