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

  sourceString
    .split(';')
    .map(elem => {
      const item = elem
        .split(':')
        .map(el => el.trim());

      if (item[1] !== undefined) {
        result[item[0]] = item[1];
      }
    });

  return result;
};

module.exports = convertToObject;
