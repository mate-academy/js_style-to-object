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
  const res = {};

  sourceString.split(';').filter(item => {
    if (item.trim().length > 0) {
      res[item.split(':')[0].trim()] = item.split(':')[1].trim();
    }
  });

  return res;
}

module.exports = convertToObject;
