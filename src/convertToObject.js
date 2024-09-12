'use strict';

/**
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
