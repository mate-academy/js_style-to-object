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
  const list = {};
  const arr = sourceString.split(';');

  for (const item of arr) {
    const colon = item.indexOf(':');
    const key = item.slice(0, colon).trim();
    const value = item.slice(colon + 2).trim();

    list[key] = value;

    if (list[key].length === 0) {
      delete list[key];
    }
  }

  return list;
}

module.exports = convertToObject;
