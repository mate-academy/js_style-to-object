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
  const arr = sourceString.split(';');
  const array = arr.map(elem => elem.split(':'));
  const res = [];

  for (const el of array) {
    if (el.length > 1) {
      res.push([el[0].trim(), el[1].trim()]);
    }
  }

  const result = Object.fromEntries(res);

  return result;
}

module.exports = convertToObject;
