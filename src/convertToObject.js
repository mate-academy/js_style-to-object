/* eslint-disable max-len */
'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};
  const arr = sourceString.split(';');
  const arr1 = arr.map(e => e.trim().split(':'));

  for (const prop of arr1) {
    if (prop.length === 2) {
      const key = prop[0].trim();
      const value = prop[1].trim();

      styles[key] = value;
    }
  }

  return styles;
}

module.exports = convertToObject;
