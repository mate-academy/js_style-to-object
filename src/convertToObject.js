/* eslint-disable no-console */
'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  // const editedString = sourceString.replace(/\n/g, '');
  const properties = sourceString.split(';');

  const result = {};

  for (const p of properties) {
    let prop = p;

    prop = prop.replace('\t', '');
    prop = prop.trim();

    if (prop.length <= 1) {
      continue;
    }

    const property = prop.split(':');

    property[0] = property[0].replace(/\n/g, '');

    property[0] = property[0].trim();
    property[1] = property[1].trim();

    result[property[0]] = property[1];
  }

  return result;
}

module.exports = convertToObject;
