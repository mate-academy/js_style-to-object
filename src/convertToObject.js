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
  const object = {};
  const arr = sourceString.replace(/\s+/g, ' ').split(';');

  for (let i of arr) {
    i = i.trim();

    if (!i) {
      arr.slice(i, 1);
      continue;
    }
    object[i.split(': ')[0].trim()] = i.split(': ')[1];
    i++;
  }

  return object;
}

module.exports = convertToObject;
