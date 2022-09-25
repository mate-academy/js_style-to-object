'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a
 * string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values
 *  of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};
  const cssProperties = sourceString
    .split(';')
    .map(el => el.trim().split(':'));

  for (const prop of cssProperties) {
    if (prop[0] && prop[1]) {
      styles[prop[0].trim()] = prop[1].trim();
    }
  }

  return styles;
}

module.exports = convertToObject;
