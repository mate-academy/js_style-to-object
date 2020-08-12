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
  const arr = sourceString.split(';\n').filter(elem => elem.includes(':'));
  const obj = {};

  for (const elem of arr) {
    obj[elem.split(': ')[0].trim()] = elem.split(': ')[1].trim();
  }

  return obj;
}

module.exports = convertToObject;
