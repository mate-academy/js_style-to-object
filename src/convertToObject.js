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
  const obj = {};

  const res = sourceString.split(';');

  for (const items of res) {
    const par = items.split(':');

    if (par[1] !== undefined) {
      obj[par[0].trim()] = par[1].trim();
    }
  }

  return obj;
}

module.exports = convertToObject;
