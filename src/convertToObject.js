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
  // write your code here
  const splitString = sourceString.split(';');

  const splitItems = splitString.map(item => item.split(':'));

  const filterItems = splitItems.filter(item => item.length > 1);

  const callback = (prev, [key, value]) =>
    ({
      ...prev,
      [key.trim()]: value.trim(),
    });

  const result = filterItems.reduce(callback, {});

  return result;
}

module.exports = convertToObject;
