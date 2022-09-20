'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};
  const properties = sourceString
    .split(';')
    .map(elem => elem.trim().split(':'));

  for (const prop of properties) {
    if (prop[0] && prop[1]) {
      styles[prop[0].trim()] = prop[1].trim();
    }
  }

  return styles;
}

module.exports = convertToObject;
