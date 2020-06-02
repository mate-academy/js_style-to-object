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
  const regexp = /([a-z-]+)\s*:\s*([a-z0-9!\-.()# ]+);/g;
  const obj = {};

  for (const i of sourceString.matchAll(regexp)) {
    obj[i[1]] = i[2].trim();
  }

  return obj;
}

module.exports = convertToObject;
