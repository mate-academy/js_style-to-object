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

  sourceString.split(';')
    .map(item => item.replace(/\n|\s\s+/g, ''))
    .forEach(el => {
      if (el) {
        const [rule, value] = el.split(':');

        result[rule.trim()] = value.trim();
      }
    });

  return result;
}

module.exports = convertToObject;
