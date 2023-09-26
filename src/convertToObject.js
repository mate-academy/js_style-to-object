'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const lines = sourceString
    .split('\n')
    .map(el => el.trim())
    .filter(el => el.length > 1)
    .map(el => el.replace(';', '').split(':'));

  const styledProperties = {};

  for (const line of lines) {
    styledProperties[line[0].trim()] = line[1].trim();
  }

  return styledProperties;
}

module.exports = convertToObject;
