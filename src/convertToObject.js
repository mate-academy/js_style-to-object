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
  const styles = {};
  const str = sourceString.split(';');

  str.forEach(item => {
    const entries = item.split(':');

    if (entries.length === 2) {
      const key = entries[0].toString().trim();
      const value = entries[1].toString().trim();

      styles[key] = value;
    }
  });

  return styles;
}

module.exports = convertToObject;
