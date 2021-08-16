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
  return sourceString
    .split(';')
    .filter(empty => empty.trim().length)
    .map(key => key.split(':').map(value => value.trim()))

    .reduce((obj, value) => {
      obj[value[0]] = value[1];

      return obj;
    }, {});
};

module.exports = convertToObject;
