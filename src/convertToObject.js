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
  const stylesCss = {};

  sourceString.split(';').filter(item => {
    if (item.split(':')[1] === undefined) {
      return false;
    }
    stylesCss[item.split(':')[0].trim()] = item.split(':')[1].trim();
  });

  return stylesCss;
}
module.exports = convertToObject;
