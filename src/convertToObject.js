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
  let rest = [];
  const obj = {};

  rest = sourceString.split(';').map(prop =>
    prop.trim()).filter(prop =>
    prop.length > 0).map(prop => prop.split(/\s*:\s*/));

  for (const prop of rest) {
    obj[prop[0]] = prop[1];
  }

  return obj;
}

module.exports = convertToObject;
