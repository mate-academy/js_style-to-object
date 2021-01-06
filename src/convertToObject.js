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
  return sourceString.split(';')
    .filter(str => str.length > 4)
    .map(rule => rule.split(':').map(el => el.trim()))
    .reduce((obj, [key, value]) => ({

      ...obj, [key]: value,
    }), {});
}

module.exports = convertToObject;
