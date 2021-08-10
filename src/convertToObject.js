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
  const css = {};

  const trimmed = sourceString.split(';').map(x => x.trim());

  for (const property of trimmed) {
    const normalizedProperty = property.split(':').map(x => x.trim());
    const key = normalizedProperty[0];
    const value = normalizedProperty[1];

    if (key !== '') {
      css[key] = value;
    }
  }

  return css;
}

module.exports = convertToObject;
