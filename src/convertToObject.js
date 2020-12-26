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
  const pairs = sourceString.split(';');
  const result = {};
  let array = [];

  pairs.forEach(item => {
    array.push(item.split(':').map(word => word.trim()));
  });
  array = array.filter(item => item.length > 1);

  array.forEach(item => {
    result[item[0]] = item[1];
  });

  return result;
}

module.exports = convertToObject;
