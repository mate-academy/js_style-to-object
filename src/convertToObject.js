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
  const arrProperties = sourceString
    .split(';')
    .map((property) => property.split(':'));

  const css = {};

  arrProperties.filter((property) => {
    const key = property[0].trim();
    const value = property[1] ? property[1].trim() : '';

    if (key.length) {
      css[key] = value;
    }
  });

  return css;
}

module.exports = convertToObject;
